import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllBooksComponent,
    BookDetailsComponent,
    PublicComponent
  ],
  imports: [
    PublicRoutingModule
  ]
})
export class PublicModule { }
