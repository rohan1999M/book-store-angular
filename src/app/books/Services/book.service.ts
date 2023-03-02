import { Injectable } from '@angular/core';
import { BookModel } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 
  constructor() { }

  getBookData(): any[] {
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
    },     {
      "id":3,
      "image":"https://nicksamoylov.com/wp-content/uploads/2019/07/Cover.jpeg",
      "title":"java Fundamentals",
      "totalPages":200,
      "author":"Rohan Mourya",
      "price":{
        "currency":"INR",
        "value":299,
      },
    }
  ]
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
