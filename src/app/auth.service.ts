import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
 //import { AngularFireStore } from '@angular/fire/firestore
import { signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private fireauth : AngularFireAuth,private router : Router, ) { }
   
// private firestore: AngularFirestore

  // login method

  Signinpage (email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      alert('login successful');
       this.router.navigate(['']);
    }, err => {
      alert('something went wrong');
      this.router.navigate(['/Signinpage']);
    })
  }

  // register or signup

  Signup(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Signup successful');
      this.router.navigate(['/login']);
    },err =>{
      alert(err.message);
      this.router.navigate(['/register']);
    } )
  }

  // signout or logout

  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/signin']);
    }, err => {
      alert(err.message);
    })
  }
}
