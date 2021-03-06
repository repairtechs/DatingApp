import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private Http: HttpClient) { }

  login(model: any){
    return this.Http.post(this.baseUrl + 'account/login', model)
  }
}
