import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  email: string;
  password: string;

  constructor(private firebaseAuthentication: AngularFireAuth) { }

  ngOnInit() {}


  login() {
    // this.firebaseAuthentication.signInWithEmailAndPassword(this.email, this.password).then(
    // (data) => {
    //   console.log('T\'es inscrit ' + data);
    // },
    // (err) => {
    //   alert(err);
    // }
    // );
  }
}
