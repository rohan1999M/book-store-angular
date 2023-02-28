import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AboutUsComponent } from './HomePage/about-us/about-us.component';
import { HomeComponent } from './HomePage/home/home.component';
import { HowItWorksComponent } from './HomePage/how-it-works/how-it-works.component';
import { PublicComponent } from './books/public.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'how-it-works',component:HowItWorksComponent},
  {path:'auth',component:AuthComponent,loadChildren:()=> import('./auth/auth.module').then((module)=> module.AuthModule)},
  {path:'user/:userId',component:UserComponent,loadChildren:()=> import('./user/user.module').then((module)=> module.UserModule)},
  {path:'public',component:PublicComponent,loadChildren:()=> import('./books/public.module').then((module)=> module.PublicModule)},
  {path:'**',component:NotFoundComponent}
  // {path:'auth',component:AuthComponent,children:[
  //   {path:'login',component:LoginComponent},
  //   {path:'signup',component:SignupComponent},
  //   {path:'change-password',component:ChangePasswordComponent},
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
