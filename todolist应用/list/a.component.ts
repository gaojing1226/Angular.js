import { Component, OnInit,Input, EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor() { }

  @Input() arrData:Array<any>;
  @Output() getIndex= new EventEmitter();

  ngOnInit() {

  }
    // todolist
    data:string;
    dataA=[];
    //从正在进行到已完成
    changeData(i){
      this.getIndex.emit(i);
      this.dataA.push(this.arrData[i]);
      this.arrData.splice(i,1);
    }
    //从已完成到正在进行
    changeData2(i){
      this.getIndex.emit(i);
      this.arrData.push(this.dataA[i])
      this.dataA.splice(i,1);
    }
    delData(i){
      this.getIndex.emit(i);
      this.arrData.splice(i,1);
    }
    delData2(i){
      this.getIndex.emit(i);
      this.dataA.splice(i,1);
    }
}
