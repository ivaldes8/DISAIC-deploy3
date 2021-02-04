import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AuthResponseData {
  token: string;
  token_validity: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpiration: any;

  constructor(private http:HttpClient, private router: Router) { }

  signup(email:string, password:string, name: string, password_confirmation:string){
    const dinamicUrl = "auth/register";
   return this.http.post<AuthResponseData>(`${environment.API_DISAIC_URL}/${dinamicUrl}`,
    {
      email:email,
      password:password,
      name:name,
      password_confirmation:password
    }
    )
    .pipe(tap(resData => {
     this.handleAuthentication(resData.token, +resData.token_validity);
    })
    );
  }

  login(email:string, password:string){
    const dinamicUrl = "auth/login";
   return this.http.post<AuthResponseData>(`${environment.API_DISAIC_URL}/${dinamicUrl}`,
    {
      email:email,
      password:password
    }
    )
    .pipe(tap(resData => {
      this.handleAuthentication(resData.token, +resData.token_validity);
     })
     );
  }

  autoLogin(){
   const userData: {
     _token:string;
     _token_validity:string;
   } = JSON.parse(localStorage.getItem('userData'));

   if (!userData) {
     return;
   }

   const loadedUser = new User(userData._token, new Date(userData._token_validity));

   if(loadedUser.token){
     this.user.next(loadedUser);
     const expirationDuration = new Date(userData._token_validity).getTime() - new Date().getTime();
     this.autoLogout(expirationDuration);
   }
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpiration) {
      clearTimeout(this.tokenExpiration);
    }
    this.tokenExpiration = null;
  }

  autoLogout(expirationDuration: number){
    console.log(expirationDuration)
    this.tokenExpiration = setTimeout(() => {
      this.logout();
    }, expirationDuration)
  }

  private handleAuthentication(token: string, token_validity: number){
    const expirationDate = new Date(new Date().getTime() + +token_validity * 1000);
    const user = new User(token, expirationDate);
    this.user.next(user);
    this.autoLogout(token_validity * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
