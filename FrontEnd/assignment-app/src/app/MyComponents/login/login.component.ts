import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  pass: string = '';
  readData: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  url = 'http://localhost:5000/';

  checkLogin() {
    //Checking if the user with this email exists or not

    let checkurl = this.url + 'users/' + this.email; //Making url for get my email api

    //Empty Check on email pass
    if (this.email == '' || this.pass == '') {
      alert('Email or Password is Empty');
      return;
    }

    //Getting list of email same as the email user entered if any
    fetch(checkurl)
      .then((response) => response.json())
      .then((data) => {
        this.readData = data;
        console.warn(this.readData, 'res==>This is the data');
        this.checkCred();
      });
  }

  checkCred() {
    if (Object.keys(this.readData).length == 0) {
      alert('Please Register');
    } else {
      if (this.readData[0].password == this.pass) {
        alert('Welcome to Parcel Delivery');

        //Saving email in local storage for later use
        localStorage.setItem('email', this.email);
        localStorage.setItem('userAccessToken', 'true');
        this.router.navigateByUrl('home');
      } else {
        alert('Wrong Password');
      }
    }
  }
  reg() {
    this.router.navigateByUrl('contact');
  }
  redForgotPass() {
    this.router.navigateByUrl('forgotPass');
  }
}
