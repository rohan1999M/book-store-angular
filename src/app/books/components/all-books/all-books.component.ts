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
  constructor(public bookServices:BookService) { }

  ngOnInit(): void {
    const allBook = this.bookServices.getBookData();
    allBook.forEach(item=>{
      var obj = new BookModel();
      obj.id = item.id;
      obj.author = item.author;
      obj.price = item.price;
      obj.title = item.title;
      obj.totalPages = item.totalPages;
      obj.image = item.image;
      // console.log('from allbook',obj)
      this.BookData.push(obj);
    })
    console.log(this.BookData)
  }
  

}
