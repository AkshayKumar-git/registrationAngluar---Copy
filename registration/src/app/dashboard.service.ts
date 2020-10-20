import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 // userId : number;
 // private _url: string = "/user";
  constructor(private _http:HttpClient, private http: HttpClient) { }
  getUserDetails(userId){
    return this._http.get<any>(environment.apiUrl + 'user/'+userId);
  }

  updateUserDetails(userId ,body : object){
    return this._http.put<any>(environment.apiUrl + 'user/'+userId,body);
  }

  deleteUser(userId){
    return this._http.delete<any>(environment.apiUrl + 'user/'+userId);
  }

}
