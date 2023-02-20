import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  admin = {email:'ad123@gmail.com', password:'123'}
  adminLoggedIn =false;
  userLoggedIn = false;
  constructor() { }
  getAdmin(){
    return this.admin;
  }
  setAdminLoggedIn(){
    this.adminLoggedIn = true;
  }
  setuserLoggedIn(){
    this.userLoggedIn = true;
  }
  logout(){
    this.adminLoggedIn = false;
    this.userLoggedIn = false;
  }
  userAuth = new Subject();
  adminAuth = new Subject();
}
