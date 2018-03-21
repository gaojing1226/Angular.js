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
  
  keyData(e){
      if(e.keyCode==13){
        this.arrD.push(this.data);
        this.data = '';
      }
  }

  ngOnInit(){
    this.data=(this.getlocaldata.getItem('list1')).split(',');
    if(this.data!=''){
      this.arrD=this.data;
    }  
  } 
}
