import { Component, OnInit } from '@angular/core';
import { Loan } from '../shared/loan.model';
import { LoanService } from '../shared/loan.service';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styles: [
  ]
})
export class LoanComponent implements OnInit {

  constructor(public service: LoanService, public clientService: ClientService) { }

  ngOnInit(): void {
    this.service.refreshList();
    //this.service.list.push(this.clientService.);
  }

  populateForm(selectedRecord: Loan) {
    this.service.formDataPost = Object.assign({}, selectedRecord);
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
