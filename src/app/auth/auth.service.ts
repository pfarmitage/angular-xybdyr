import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import firebase from '@firebase/app-compat';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  // Sign up with email and password
  signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Sign in with email and password
  signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign out
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Get the current user
  getCurrentUser(): Promise<firebase.User> {
    return this.afAuth.currentUser;
  }

  // Log in using email and password
  login(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
