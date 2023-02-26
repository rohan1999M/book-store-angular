import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {

   UserId = 0;

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((parm:any)=>{
      console.log(parm);
      this.UserId = parm.userId;
    })
  }

}
