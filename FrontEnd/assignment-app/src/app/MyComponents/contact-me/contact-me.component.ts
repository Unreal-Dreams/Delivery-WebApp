import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  //This is actually register page

  url = 'http://localhost:5000/';

  readData: any;

  checkIfExist(Postdata: any) {
    //Creating url
    if (
      Postdata.name == '' ||
      Postdata.email == '' ||
      Postdata.password == '' ||
      Postdata.country == '' ||
      Postdata.state == '' ||
      Postdata.city == '' ||
      Postdata.zip == ''
    ) {
      alert('All fields are madatory please fill');
      return;
    }

    //Check if Email is valid

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let Email = Postdata.email;
    if (!Email.match(regexEmail)) {
      alert('Email entered is not valid please check');
      return;
    }

    console.log('Inside check if exist function');
    let checkurl = this.url + 'users/' + Postdata.email;
    console.log(checkurl);

    //Getting list of email same as the email user entered if any
    fetch(checkurl)
      .then((response) => response.json())
      .then((data) => {
        this.readData = data;
        this.postUserData(Postdata);
      });

    console.log('Checkif Exist ended');
  }

  //Checking If credentials are unique posting user data
  postUserData(data: any) {
    if (Object.keys(this.readData).length == 0) {
      console.log('No email exist');
    } else {
      alert('This email already exist redirecting to login page');
      this.router.navigateByUrl('login');
      return;
    }

    console.warn(data.phone, 'res==> phone no of user');
    console.log('post function continues');

    fetch(this.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(async (result) => {
      console.warn('returnd response on post request', result);
      alert('Registration Successful');
      this.router.navigateByUrl('login');
    });
  }
}
