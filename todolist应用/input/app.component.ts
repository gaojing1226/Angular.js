import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){ }
 
  ngOnInit(){
    
  }
  data:string;
  arrD=[];
  index:number;
  
  getIndex(i){
    this.index=i;
  }
  
  keyData(e){
      if(e.keyCode==13){
        this.arrD.push(this.data);
        this.data = '';
      }
  }
}
