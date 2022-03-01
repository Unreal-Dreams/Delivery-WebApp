import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

import { ContactMeComponent } from './MyComponents/contact-me/contact-me.component';
import { FeedbackComponent } from './MyComponents/feedback/feedback.component';
import { ForgotPassComponent } from './MyComponents/forgot-pass/forgot-pass.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { OrderHistoryComponent } from './MyComponents/order-history/order-history.component';
import { ParcelComponent } from './MyComponents/parcel/parcel.component';
import { PaymentComponent } from './MyComponents/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'contact',
    component: ContactMeComponent,
  },
  {
    path: 'forgotPass',
    component: ForgotPassComponent,
  },
  {
    path: 'parcel',
    component: ParcelComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'orderHistory',
    component: OrderHistoryComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginComponent],
})
export class AppRoutingModule {}
