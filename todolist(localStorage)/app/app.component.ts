import { Component, OnInit} from '@angular/core';
import { GetdataService } from './services/getdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public getlocaldata:GetdataService ) { }

  data;
  arrD=[];

  getD(event){
    this.arrD.push(event);
    this.getlocaldata.setItem('list1',this.arrD);
  } 
  
  ngOnInit(){
    this.data=(this.getlocaldata.getItem('list1')).split(',');
    if(this.data!=''){
      this.arrD=this.data;
    }
  }
  
}