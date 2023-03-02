import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/books.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
 public _books:any;
  @Input()
  public set books(book:BookModel[]){
    book.map(x=>x.title = "Title:  "+ x.title)
    this._books = book; 
  }
  public get books():BookModel[]{
     return this._books; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
