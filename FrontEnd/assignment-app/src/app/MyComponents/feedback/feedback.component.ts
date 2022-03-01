import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  url = 'http://localhost:5000/feedback';

  //Posting Feedback
  postFeedback(data: any) {
    data['email'] = localStorage.getItem('email');
    fetch(this.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(async (result) => {
      console.warn('returnd response on post request', result);
      alert('Thanks for your valuable feedback');
      this.router.navigateByUrl('home');
    });
  }
}
