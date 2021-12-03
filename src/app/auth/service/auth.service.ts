import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {LoginInterface} from "../models/login.models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) { }

  login(username: string, password: string): Observable<LoginInterface[]> {
    return this.httpClient.get<LoginInterface[]>('./assets/json/login.data.json');
  }
}
