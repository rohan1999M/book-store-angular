import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/books.model';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  model = new BookModel();
  constructor(public bookService : BookService) { }

  ngOnInit(): void {
    this.model.title = 'Book-title';
    this.model.author = "xyz";
    this.model.image = "https://xuri.me/wp-content/uploads/2013/12/beginning-php-and-mysql.png"
    this.model.price = {
      "currency":"INR",
      "value":100
    }
    this.model.totalPages= 100;
  }

  addBook(){
    // console.log(this.model);
    this.bookService.addBook(this.model).subscribe(res=>{
      console.log(" from add Book Method in Ts",res)
    });
  }

}
