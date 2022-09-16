import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from './book.model';

@Component({
   selector: 'app-book',
   templateUrl: './book.component.html'
})
export class BookComponent implements OnInit { 
   
   post$!: Observable<any>;
   todo$!: Observable<any>;
   searchPostQuery!: string;
   searchTodoQuery!: string;
   constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  
  
  searchPost(){
    this.post$ = this.bookService.searchProduct(+this.searchPostQuery);
  }

  searchTodo(){
    this.todo$ = this.bookService.searchTodo(+this.searchTodoQuery);
  }
} 