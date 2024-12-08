import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userLoginState: boolean = false;

  constructor(
    private _router: Router
  ) { }

  //Api calls>> login, signIn, logOut

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.userLoginState);

      }, 500);
    })
  }

  loginApp() {
    //api call and send emailId and pass to backend
    this.userLoginState = true;
    console.log(this.userLoginState);

    this._router.navigate(['/admin']);
  }

  logoutApp() {
    this.userLoginState = false;
    this._router.navigate(['/home']);
    console.log(this.userLoginState);


  }

}