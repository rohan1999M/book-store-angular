import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // {path:'public',component:PublicComponent,children:[
    {path:'', redirectTo:'all-books',pathMatch:'full'},
    {path:'all-books',component:AllBooksComponent},
    {path:'home',component:HomeComponent},
    {path:'book-details/:id/author/:authorId',component:BookDetailsComponent},
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
