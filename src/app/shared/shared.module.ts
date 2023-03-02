import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,HeaderComponent,NotFoundComponent,AuthorsComponent
  ]
})
export class SharedModule { }
