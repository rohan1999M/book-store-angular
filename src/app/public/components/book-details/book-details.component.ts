import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
 id:number = 0;
 authorId:any = 'null';

  constructor(public route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((parm:any)=>{
      console.log(parm);
      this.id = parm.id;
      this.authorId = parm.authorId;
    })
  }

}
