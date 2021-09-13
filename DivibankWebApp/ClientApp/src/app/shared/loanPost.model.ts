import { Client } from './client.model';

export class LoanPost {
  id: number;
  requestDate: Date;
  amount: number;
  clientId: number;

  constructor() {
    this.id = 0;
    this.requestDate = new Date();
    this.amount = 0;
    this.clientId = 0;
    
    
  }
}
