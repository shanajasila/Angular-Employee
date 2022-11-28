import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { SearchEmployComponent } from './search-employ/search-employ.component';
import { DeleteEmployComponent } from './delete-employ/delete-employ.component';
import { ViewallEmployeeComponent } from './viewall-employee/viewall-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule } from '@angular/forms';

const myRoute : Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:AddEmployComponent
  },
  {
    path:"search",
    component:SearchEmployComponent
  },
  {
    path:"delete",
    component:DeleteEmployComponent
  },
  {
    path:"view",
    component:ViewallEmployeeComponent
  },
  {
    path:"edit",
    component:EditEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployComponent,
    SearchEmployComponent,
    DeleteEmployComponent,
    ViewallEmployeeComponent,
    NavbarComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
