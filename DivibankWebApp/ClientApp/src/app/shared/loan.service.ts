import { Injectable } from '@angular/core';
import { Loan } from './loan.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http: HttpClient) {
  }
  readonly _baseUrl = "https://localhost:44336/api/Loan";
  formData: Loan = new Loan();
  list: Loan[] = [] ;

  postLoan() {
    return this.http.post(this._baseUrl, this.formData);
  }
  putLoan() {
    return this.http.put("${this._baseUrl}/${this.formData.id}", this.formData);
  }
  deleteLoan(id: number) {
    return this.http.delete("${this._baseUrl}/${id}");
  }
  refreshList() {
    this.http.get(this._baseUrl)
      .toPromise()
      .then(res => this.list = res as Loan[]);
  }
}
