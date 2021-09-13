import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client.model';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: [
  ]
})
export class ClientComponent implements OnInit {

  constructor(public service: ClientService) { }

  ngOnInit(): void {
    this.service.refreshList();
    
  }

  populateForm(selectedRecord: Client) {
    
    this.service.formData = Object.assign({}, selectedRecord);
   // this.service.formData.birthday = selectedRecord.birthday;
  }

  onDelete(id: number) {
    this.service.deleteClient(id)
      .subscribe(
        res => {
          this.service.refreshList(); 
        },
        err => { console.log(err) }
      )
  }
}
