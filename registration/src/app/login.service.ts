import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
//import {Iuser} from "./user";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string = "/userCheck";
//  $isloggedin : new EventEmitter ;

  constructor(private _http:HttpClient, private http: HttpClient) { }

  login(userData){
    return this._http.post<any>(environment.apiUrl + 'userCheck',userData);
  }
  loginid(userData){
    return this._http.post<any>(environment.apiUrl + 'username',userData);
  }

  // getUser():Observable<Iuser[]>{
  //   return this.http.get<Iuser[]>(this._url);
  // }

}
