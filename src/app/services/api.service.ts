import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../others/interfaces-Users';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<Users[]> {
    return this._http.get<Users[]>(this.apiUrl);
  }

  getUsersId(id): Observable<Users[]> {
    return this._http.get<Users[]>(this.apiUrl+`/${id}`);
  }
}
