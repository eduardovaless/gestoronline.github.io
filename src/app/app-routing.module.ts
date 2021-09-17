import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginComponent},

  { path: 'home', component: LayoutComponent, children: [    
    { path: 'home', component: HomeComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
