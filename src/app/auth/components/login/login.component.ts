import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = '';
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParm:any)=>{
      console.log(queryParm)
      this.name = queryParm.name;
    })
  }
  goToSignUp():void{
    this.router.navigate(['/auth/signup'])
  }
  gotToBookDetails(id:number ,authorId:any):void{
     this.router.navigate(['/public/book-details',id,'author',authorId])
  }

}
