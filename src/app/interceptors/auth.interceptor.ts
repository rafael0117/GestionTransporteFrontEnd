import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token'); // Obtener token de localStorage

    // Definimos rutas que NO deben llevar Authorization
    const excludedUrls = ['/api/auth/login', '/api/auth/register']; // Puedes agregar más rutas aquí si es necesario

    // Revisa si la URL actual está en la lista de excluidas
    const isExcluded = excludedUrls.some(url => req.url.includes(url));

    if (isExcluded) {
      console.log('[Interceptor] Request excluida del Authorization:', req.url);
      // Si está excluida, simplemente pasamos la solicitud sin agregar el token
      return next.handle(req.clone({ withCredentials: true }));
    }

    let authReq = req.clone({
      withCredentials: true // Para enviar las cookies con la solicitud (si es necesario)
    });

    // Si el token existe, agregamos el encabezado Authorization
    if (token) {
      authReq = authReq.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Agregar token en el encabezado Authorization
        }
      });
      console.log('[Interceptor] Agregando Authorization a:', req.url);
    } else {
      console.log('[Interceptor] No hay token, la solicitud se enviará sin Authorization.');
    }

    // Pasar la solicitud a la siguiente capa del interceptor
    return next.handle(authReq);
  }
}
