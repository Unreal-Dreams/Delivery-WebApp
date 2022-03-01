import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';

import { LoginComponent } from './MyComponents/login/login.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactMeComponent } from './MyComponents/contact-me/contact-me.component';
import { ForgotPassComponent } from './MyComponents/forgot-pass/forgot-pass.component';
import { ParcelComponent } from './MyComponents/parcel/parcel.component';
import { OrderHistoryComponent } from './MyComponents/order-history/order-history.component';
import { PaymentComponent } from './MyComponents/payment/payment.component';
import { FeedbackComponent } from './MyComponents/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactMeComponent,
    LoginComponent,
    NavbarComponent,
    ForgotPassComponent,
    ParcelComponent,
    OrderHistoryComponent,
    PaymentComponent,
    FeedbackComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
