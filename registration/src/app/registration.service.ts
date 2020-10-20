import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private _http:HttpClient) { }

  register(userData){
    return this._http.post<any>(environment.apiUrl + 'userAdd',userData);
  }

}
