import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  //Connect Frontend to backend

  apiUrl='http://localhost:5000/users'

  //getAll Data
  getAllData():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  //createData
  url='http://localhost:5000/';

  createData(data:any):Observable<any>{
    console.log(data,'createApi==>');
    return this.http.post(this.url,data,{
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
}
