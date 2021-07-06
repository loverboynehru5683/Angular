import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  private behaviorSubj = new BehaviorSubject('Hi All!')
  currentMsg = this.behaviorSubj.asObservable()
  changeData(data:string){
    console.log(data)
    this.behaviorSubj.next(data)
  }
}
