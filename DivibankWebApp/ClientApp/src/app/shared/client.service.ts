import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }
  readonly _baseUrl = "http://localhost:30358/api/Client";
  formData: Client = new Client();
  list: Client[] = [];

  postClient() {
    return this.http.post(this._baseUrl, this.formData);
  }
  putClient() {
    return this.http.put(`${this._baseUrl}/${this.formData.id}`, this.formData);
  }
  deleteClient(id: number) {
    return this.http.delete(`${this._baseUrl}/${id}`);
  }
  refreshList() {
    this.http.get(this._baseUrl)
      .toPromise()
      .then(res =>  this.list = res as Client[]);
  }
}
