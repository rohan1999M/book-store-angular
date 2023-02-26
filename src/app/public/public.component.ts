import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.firstChild?.params.subscribe((parm:any)=>{
    //   console.log(parm)
    // })
  }
  bookId = 1;
  authorId = 'rohan01';

}
