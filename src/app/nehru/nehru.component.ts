import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nehru',
  templateUrl: './nehru.component.html',
  styleUrls: ['./nehru.component.css']
})
export class NehruComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = 'nehru';
  age:number = 21;

  customer = {
    a : 101,
    b : 'nehru',
    c : true,
    d : [20, 21, 22],
    e : [[101,'sam'], [102,'hari'], [103,'mahesh']],
    
  }

}
