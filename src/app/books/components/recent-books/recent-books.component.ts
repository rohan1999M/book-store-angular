import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/books.model';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit {
  
  recentBook:BookModel[] =[]
  constructor(public bookServices:BookService) { }

  ngOnInit(): void {
    this.recentBook = this.bookServices.getRecentBooks();
  }

}
