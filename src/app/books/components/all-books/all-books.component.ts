import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/books.model';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
    BookData:BookModel[]=[];
    // BookData:any[]=[]
  constructor(public bookServices:BookService) { }

  ngOnInit(): void {
    this.getBookDataAPI();
  }

  getBookDataAPI():void{
     console.log('calling api services');
     this.bookServices.getBook().subscribe(res =>{
          console.log(res);
          this.BookData = res;
          
     })
  }

}
