import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl = 'http://127.0.0.1:5000';

  constructor(public http: HttpClient) { }

  public getRequestOptions(): { headers: HttpHeaders } {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return { headers };
  }

  get(url: string) {
    const requestOptions = this.getRequestOptions();
    return this.http.get(`${this.baseUrl}${url}`, requestOptions);
  }

  post(url: string, body) {
    const requestOptions = this.getRequestOptions();
    return this.http.post(`${this.baseUrl}${url}`, body, requestOptions);
  }

  put(url: string, body) {
    const requestOptions = this.getRequestOptions();
    return this.http.put(`${this.baseUrl}${url}`, body, requestOptions);
  }

  delete(url: string){
    const requestOptions = this.getRequestOptions();
    return this.http.delete(`${this.baseUrl}${url}`, requestOptions);
  }

}
