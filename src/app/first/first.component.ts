import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  message:string='';
  constructor(private dataService:DataService) {
    dataService.currentMsg.subscribe(successMsg => this.message = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){
    this.dataService.changeData('Hi All, This is Component1')
  }

}
