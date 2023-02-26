import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
// import { AuthComponent } from './auth/auth.component';
// import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { SignupComponent } from './auth/components/signup/signup.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PublicComponent } from './public/public.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo:'about-us',pathMatch:'full'},
  {path:'about-us',component:AboutUsComponent},
  {path:'how-it-works',component:HowItWorksComponent},
  {path:'auth',component:AuthComponent,loadChildren:()=> import('./auth/auth.module').then((module)=> module.AuthModule)},
  {path:'user/:userId',component:UserComponent,loadChildren:()=> import('./user/user.module').then((module)=> module.UserModule)},
  {path:'public',component:PublicComponent,loadChildren:()=> import('./public/public.module').then((module)=> module.PublicModule)},
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
