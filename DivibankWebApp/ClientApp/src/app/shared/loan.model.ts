import { Client } from './client.model';

export class Loan {
  id: number;
  requestDate: Date;
  amount: number;
  client: Client;

  constructor() {
    this.id = 0;
    this.requestDate = new Date();
    this.amount = 0;
    this.client = new Client();
  }
}
