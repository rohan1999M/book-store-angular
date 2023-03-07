import { NgModule } from '@angular/core';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { Routes, RouterModule } from '@angular/router';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
    {path:'all-books',component:AllBooksComponent},
    {path:'book-details/:id/author/:authorId',component:BookDetailsComponent},
    {path:'recent',component:RecentBooksComponent},
    {path:'new',component:AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
