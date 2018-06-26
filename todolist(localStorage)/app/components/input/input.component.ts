import { Component, OnInit,Output ,EventEmitter,Input} from '@angular/core';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public getlocaldata: GetdataService) { }

  ngOnInit() {}
  @Output() onkeyup =new EventEmitter();
  
  arrData=[];
  data='';
  
  keyData(e){
    if(e.keyCode==13){
      //console.log(this.data);
      this.onKeyup.emit(this.data);
      this.arrData.push(this.data);
      this.data = '';
    }
  }
}
