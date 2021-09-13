import { Injectable } from '@angular/core';
import { Loan } from './loan.model';
import { LoanPost } from './loanPost.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http: HttpClient) {
  }
  readonly _baseUrl = "http://localhost:30358/api/Loan";
  formData: Loan = new Loan();
  formDataPost: LoanPost = new LoanPost();
  list: Loan[] = [] ;

  postLoan() {
    return this.http.post(this._baseUrl, this.formDataPost);
  }
  putLoan() {
    return this.http.put(`${this._baseUrl}/${this.formDataPost.id}`, this.formDataPost);
  }
  deleteLoan(id: number) {
    return this.http.delete(`${this._baseUrl}/${id}`);
  }
  refreshList() {
    this.http.get(this._baseUrl)
      .toPromise()
      .then(res => this.list = res as Loan[]);
  }
}
