import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { ContactComponent } from './home/contact/contact.component';

@NgModule({
  imports:      [ BrowserModule,RouterModule,FormsModule, ReactiveFormsModule ,AppRoutingModule  ],
  declarations: [ AppComponent , HomeComponent, RegisterComponent, ContactComponent   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
