import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  price = localStorage.getItem('price');
  id = localStorage.getItem('id');

  PostParcel() {
    alert('Your parcel will be picked up shortly');
    this.router.navigateByUrl('home');
  }
}
