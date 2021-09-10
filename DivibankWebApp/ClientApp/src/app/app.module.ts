import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { LoanComponent } from './loan/loan.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { LoanFormComponent } from './loan/loan-form/loan-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    LoanComponent,
    ClientFormComponent,
    LoanFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
