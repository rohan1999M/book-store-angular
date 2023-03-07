import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // public allBooks = [
  //   {
  //     "id":1,
  //     "image":"https://realtoughcandy.com/wp-content/uploads/2021/07/angular-books-enterprise-ready.jpg",
  //     "title":"Angular Fundamentals",
  //     "totalPages":200,
  //     "author":"Rohan Mourya",
  //     "price":{
  //       "currency":"INR",
  //       "value":299,
  //     },
  //   },
  //   {
  //     "id":2,
  //     "image":"https://s2.adlibris.com/images/58190479/modern-c-for-absolute-beginners.jpg",
  //     "title":"C++ Fundamentals",
  //     "totalPages":200,
  //     "author":"Rohan Mourya",
  //     "price":{
  //       "currency":"INR",
  //       "value":299,
  //     },
  //   },     {
  //     "id":3,
  //     "image":"https://nicksamoylov.com/wp-content/uploads/2019/07/Cover.jpeg",
  //     "title":"java Fundamentals",
  //     "totalPages":200,
  //     "author":"Rohan Mourya",
  //     "price":{
  //       "currency":"INR",
  //       "value":299,
  //     },
  //   }

  // ];
  constructor(public http:HttpClient) { }

  // addBook(bookData:BookModel):void{
  //   console.log('From book serives ',bookData)
  //    this.allBooks.push(bookData)
  // }

  addBook(bookData:BookModel):Observable<BookModel>{
     return this.http.post<BookModel>('http://localhost:3000/allBooks/',bookData);
  }


  // getBookData(): any[] {
  //   return this.allBooks
  // }

  getBook():Observable<BookModel[]>{
     return this.http.get<BookModel[]>('http://localhost:3000/allBooks');
  }
   
  getRecentBooks():any[]{
    return [
      {
      "id":1,
      "image":"https://realtoughcandy.com/wp-content/uploads/2021/07/angular-books-enterprise-ready.jpg",
      "title":"Angular Fundamentals",
      "totalPages":200,
      "author":"Rohan Mourya",
      "price":{
        "currency":"INR",
        "value":299,
      },
    },
    {
      "id":2,
      "image":"https://s2.adlibris.com/images/58190479/modern-c-for-absolute-beginners.jpg",
      "title":"C++ Fundamentals",
      "totalPages":200,
      "author":"Rohan Mourya",
      "price":{
        "currency":"INR",
        "value":299,
      },
    },
  ]
  }
}
