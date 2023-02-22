import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private readonly http: HttpClient) { }

  sendEmail(payLoad: any) {
    return this.http.post('http://localhost:7777/_EmailService/sendEmailAgent', payLoad)
  }
}
