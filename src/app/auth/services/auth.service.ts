import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {first} from 'rxjs/operators';

@Injectable()
export class AuthService {

  public user: User;
  constructor(public afAuth: AngularFireAuth) { }
  async login(email: string, password: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch (e) {console.log(e)}
  }
  async register(email: string, password: string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    }catch (e) {
      console.log(e);
    }
  }
  async logout(){
    try{
      await this.afAuth.signOut();
    }catch (e) {
      console.log(e);
    }
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
