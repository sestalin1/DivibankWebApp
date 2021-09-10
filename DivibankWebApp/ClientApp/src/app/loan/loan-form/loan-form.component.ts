import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../shared/loan.service';
import { NgForm } from '@angular/forms';
import { Loan } from '../../shared/loan.model';
@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styles: [
  ]
})
export class MemberFormComponent implements OnInit {
  constructor(public service: LoanService) {
  }
  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0) //we will use the id as identifier for updating or insertion
      this.insertRecord(form);
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
