import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})
export class ForgotPassComponent implements OnInit {
  phone: number = 0;
  email: string = '';
  readData: any;

  constructor(private router: Router) {}
  url = 'http://localhost:5000/';

  checkDetails() {
    let checkurl = this.url + 'users/' + this.email;
    console.log(checkurl);

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
      console.log('Please Enter Correct Email id');
    } else {
      if (this.readData[0].phone == this.phone) {
        alert('Your password is ' + this.readData[0].password);
        this.router.navigateByUrl('login');
      } else {
        alert('Please Enter correct phone no associated with the email');
      }
    }
  }
  ngOnInit(): void {}
}
