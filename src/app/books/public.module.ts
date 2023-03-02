import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    PublicComponent,
    RecentBooksComponent,
    BookCardComponent
  ],
  imports: [
    PublicRoutingModule,CommonModule
  ]
})
export class PublicModule { }
