import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent 
{
  number1:any;
  number2:any;
  number3:any;

  getResult(value:any)
  {
    var value1=(Number)(this.number1)
    var value2=(Number)(this.number2)
    if(value=='+')
    this.number3=value1+value2
    else if(value=='-')
    this.number3=value1-value2
    else if(value=='*')
    this.number3=value1*value2
    else 
    this.number3=value1/value2
  }
  
 
}
