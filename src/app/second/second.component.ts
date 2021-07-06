import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  message:string='';
  constructor(private dataService:DataService) {
    dataService.currentMsg.subscribe(successMsg => this.message = successMsg)
  }
  ngOnInit(): void {
  }
  modifiedData(){
    this.dataService.changeData('Hi All, This is Component2')
  }

}

