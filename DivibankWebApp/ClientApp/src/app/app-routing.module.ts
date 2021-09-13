import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { LoanComponent } from './loan/loan.component';
 
const routes: Routes = [
  {

    path: '', redirectTo:'/client', pathMatch: 'full'

  },
  {

    path: 'client', component: ClientComponent

  }, {

    path: 'loan', component: LoanComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const ArrayOfComponents = [ClientComponent, LoanComponent];
