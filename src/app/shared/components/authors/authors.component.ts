import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
    console.log('name of author came from parent to child ',this.data)
  }

}
