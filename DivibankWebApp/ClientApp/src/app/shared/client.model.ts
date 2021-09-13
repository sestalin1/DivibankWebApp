import { Loan } from './loan.model';

export class Client {
  id: number;
  name: string;
  birthday: Date;

  constructor() {
    this.id = 0
    this.name = "";
    this.birthday = new Date();

  }
}
