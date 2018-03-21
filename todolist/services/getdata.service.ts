import { Injectable } from '@angular/core';

@Injectable()
export class GetdataService {

  constructor() { }
  
  list;
  //get(url:number){
    //$.ajax({
      //url:url,
      //type:
     // return url +100;
   // }
  setItem(key,data){
    localStorage.setItem(key,data);
  }

  getItem(key){
    this.list=localStorage.getItem(key);
    return this.list;
  }
}
