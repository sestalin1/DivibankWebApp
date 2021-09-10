import { Component, OnInit } from '@angular/core';
import { Loan } from '../shared/loan.model';
import { LoanService } from '../shared/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styles: [
  ]
})
export class LoanComponent implements OnInit {

  constructor(public service: LoanService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Loan) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    this.service.deleteLoan(id)
      .subscribe(
        res => {
          this.service.refreshList();
        },
        err => { console.log(err) }
      )
  }
}
