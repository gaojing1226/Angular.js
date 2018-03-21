import { Component, OnInit,Input, EventEmitter,Output} from '@angular/core';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(public getlocaldata:GetdataService ) {}

  data;
  dataA=[];
  list2;

  @Input() arrData:Array<any>;
  @Output() getIndex= new EventEmitter();

  //获取缓存数据
  ngOnInit() {
    this.list2=(this.getlocaldata.getItem('list2')).split(',');
    if(this.list2!=''){
      this.dataA=this.list2;
    }
  }
    // todolist
  
    //从正在进行到已完成
    changeData(i){
      this.dataA.push(this.arrData[i]);
      this.arrData.splice(i,1);

      this.getlocaldata.setItem('list1',this.arrData);
      this.getlocaldata.setItem('list2',this.dataA);

    }
    //从已完成到正在进行
    changeData2(i){
      this.arrData.push(this.dataA[i])
      this.dataA.splice(i,1);
    }
    delData(i){
      this.arrData.splice(i,1);
    }
    delData2(i){
      this.dataA.splice(i,1);
    }
}
