import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaService {
  url:string = 'assets/java.json';
  constructor(private httpClient:HttpClient)
  {}
  getJavaInfo()
  {
     return this.httpClient.get(this.url)
}
}