import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../book/book.model';


@Injectable()
export class BookService {
    constructor(private http: HttpClient) { }

    bookUrl = "/api/booksSearch";	
    searchBooksByTitle(searchQuery: string): Observable<Book[]> {
        let httpParams = new HttpParams()
            .set('name', searchQuery)
        return this.http.get<Book[]>(this.bookUrl, {
            params: httpParams
        });
    }

    searchProduct(postId:number):Observable<any>{
        let httpHeaders= new HttpHeaders();
        httpHeaders = httpHeaders.set('IsCache','YES');
        return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}?test=abc`,{headers:httpHeaders})
    }

    searchTodo(postId:number):Observable<any>{
        // let httpHeaders= new HttpHeaders();
        // httpHeaders = httpHeaders.set('IsCache','YES');
        return this.http.get(`https://jsonplaceholder.typicode.com/todos/${postId}`) //,{headers:httpHeaders}
    }
} 