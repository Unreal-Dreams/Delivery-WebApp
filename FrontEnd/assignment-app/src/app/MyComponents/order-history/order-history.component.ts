import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  readData: any;
  constructor(private http: HttpClient) {}
  url = 'http://localhost:5000/orders/' + localStorage.getItem('email');
  ngOnInit(): void {
    this.http.get(this.url).subscribe((res) => {
      console.log(res, 'res==> ');
      this.readData = res;
      console.log('Type of resData is ', typeof this.readData);
    });
  }

  //Will Add Fetch Order Detail by Id later
}
