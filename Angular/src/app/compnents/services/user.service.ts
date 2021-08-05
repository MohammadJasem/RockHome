import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  auth = false;
  private SERVER_URL = environment.SERVER_URL;
  private user;
  authState$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.auth);
  userData$ : BehaviorSubject<ResponseModel> = new BehaviorSubject<ResponseModel>(null);

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: string, password: string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = {email, password};
    const options = {
      headers
    };
    this.httpClient.post(`${this.SERVER_URL}/login`, params, options).subscribe(
      (data: ResponseModel) =>{//chrome.exe --user-data-dir="C:\Users\ASUS\Documents\my\data" --disable-web-security
        this.auth = true;
        this.authState$.next(this.auth);
        this.userData$.next(data);
      }
    )
  }

  logout(){
    this.auth = false;
    this.authState$.next(this.auth);
    this.router.navigateByUrl('/login');
  }
}

export interface ResponseModel{
  email: string;
  firstname: string;
  lastname: string;
  id: number;
}
