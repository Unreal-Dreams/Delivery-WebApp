import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new Subject<string>();
  //currentMessage$ = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  sendMessage(message: string) {
    this.messageSource.next(message);
    console.warn('Send message called', message);
  }

  getMessage() {
    return this.messageSource.asObservable();
  }
}
