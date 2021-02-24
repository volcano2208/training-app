import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }
  private petsURL =
    'https://petstore.swagger.io/v2/pet/findByStatus?status=pending';
  getAll(): Observable<any> {
    return this.http.get(this.petsURL);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${'https://petstore.swagger.io/v2/pet'}/${id}`);
  }

  create(data: any): Observable<any> {
    const req = this.http.post('https://petstore.swagger.io/v2/pet', data);
    return req;
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${'https://petstore.swagger.io/v2/pet'}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${'https://petstore.swagger.io/v2/pet'}/${id}`);
  }
}
