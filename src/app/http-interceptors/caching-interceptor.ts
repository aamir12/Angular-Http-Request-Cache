import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheMapService } from '../services/cache-map.service';

const CACHABLE_URL = ["https://jsonplaceholder.typicode.com/posts"];

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    constructor(private cache: CacheMapService) {}

   intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.method !== 'GET') { 
           return next.handle(req); 
        }
        const cachedResponse = this.cache.get(req);
        const putInCache = !!req.headers.get('IsCache');
        if (cachedResponse !== null) {
           return of(cachedResponse);
        }
        return next.handle(req).pipe(
           tap(event => {
              if (event instanceof HttpResponse && putInCache) {
                this.cache.put(req, event); 
              }
           })
        );
   }
    
} 