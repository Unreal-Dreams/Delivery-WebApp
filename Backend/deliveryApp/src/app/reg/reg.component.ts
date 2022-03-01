import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  errormsg:any;
  ngOnInit(): void {
  }

  onClickSubmit(data:any){
    this.service.createData(data).subscribe((res)=>{
      console.log(res,"res==>");
    });
  }
  url='http://localhost:5000/';
  onClickFetch(data:any){
    fetch(this.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (result) => {
      console.warn("returnd response on post request", result);
      // const response = await getData();
      // response.json().then((data) => {
      //   console.log(data);
      // });
    });
  }
}
