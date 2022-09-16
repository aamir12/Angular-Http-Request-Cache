import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { httpInterceptorProviders } from './http-interceptors';


import { CacheMapService } from './services/cache-map.service';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    httpInterceptorProviders,
    BookService,
    CacheMapService,
    { provide: Cache, useClass: CacheMapService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
