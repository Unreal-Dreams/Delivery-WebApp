import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.scss'],
})
export class ParcelComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  email: string = '';
  subscription: Subscription;
  ngOnInit(): void {}

  url = 'http://localhost:5000/orders/id';

  placeOrder(data: any) {
    console.log(data);
    //Checking if Empty
    if (
      data.type == '' ||
      data.alternatePhone == '' ||
      data.weight == '' ||
      data.length == '' ||
      data.breadth == '' ||
      data.pickupAdd == '' ||
      data.dropAdd == '' ||
      data.imageUrlVar == ''
    ) {
      alert('All Feilds are Mandatory');
      return;
    }

    //Getting Email from local storage
    this.email = localStorage.getItem('email');

    //Funciton call to calculate total Price
    this.totaLPrice(data.length, data.breadth, data.weight);

    //Adding email to data
    data['email'] = this.email;

    //Posting parcel request
    fetch(this.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(async (result) => {
      console.warn('returnd response on post request', result);
      this.gettingId();
    });
    alert('Please wait while we process your order');
    setTimeout(() => {
      this.router.navigateByUrl('payment');
    }, 2000);
  }

  //Function for getting Id for the current Order
  gettingId() {
    let urlGet = 'http://localhost:5000/orders/' + this.email;
    console.log(urlGet);

    //Getting list of email same as the email user entered if any
    fetch(urlGet)
      .then((response) => response.json())
      .then((data) => {
        console.warn(data.length, 'length of array');
        console.warn(data[data.length - 1].id, 'res==>size of posted object');
        localStorage.setItem('id', data[data.length - 1].id);
      });
  }

  totaLPrice(length, breadth, weight) {
    let price = weight * 10 + length * breadth * 1;
    localStorage.setItem('price', price.toString());
  }
}
