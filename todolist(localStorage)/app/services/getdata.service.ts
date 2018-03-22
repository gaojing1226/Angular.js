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
  setItem(key,value){
    localStorage.setItem(key,value);
  }

  getItem(key){
    this.list=localStorage.getItem(key);
    return this.list;
  }
  
  deleteItem(key){
    localStorage.removeItem(key);
  }
}
