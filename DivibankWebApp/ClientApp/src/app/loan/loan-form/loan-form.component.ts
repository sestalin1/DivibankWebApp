import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../shared/loan.service';
import { ClientService } from '../../shared/client.service';
import { NgForm } from '@angular/forms';
import { Loan } from '../../shared/loan.model';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styles: [
  ]
})
export class LoanFormComponent implements OnInit {
  constructor(public service: LoanService, public clientService: ClientService) {
  }
  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    //this.service.formData.client
    
    if (this.service.formDataPost.id == 0)
    {//we will use the id as identifier for updating or insertion
      //console.log('client' + this.service.formDataPost);
      //this.service.formData.clientId = this.service.formDataPost.client.id;
      //let loan: {} = { 'id': this.service.formData.id, 'amount': this.service.formData.amount, 'requestDate': this.service.formData.requestDate, 'clientId': this.service.formData.clientId };
      //form.removeControl(form);
      this.insertRecord(form);
    }
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postLoan().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putLoan().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Loan();
  }
}
