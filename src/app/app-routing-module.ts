import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { ContactComponent } from './home/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact',component: ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 'home' if no path is specified
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page (redirects to home)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
