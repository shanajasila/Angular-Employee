import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { SearchEmployComponent } from './search-employ/search-employ.component';
import { DeleteEmployComponent } from './delete-employ/delete-employ.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployComponent,
    SearchEmployComponent,
    DeleteEmployComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
