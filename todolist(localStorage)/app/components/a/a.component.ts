import { Component, OnInit,Input, EventEmitter,Output} from '@angular/core';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(public getlocaldata:GetdataService ) {}

  dataA=[];
  list2;
  list1;

  @Input() arrData:Array<any>;
  @Output() getIndex= new EventEmitter();

  //获取缓存数据
  ngOnInit() {
    this.list1=(this.getlocaldata.getItem('list1')).split(',');
    if(this.list1!=''){
      this.arrData=this.list1;
    }
    
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
      //获取（更新）list1 list2缓存
      this.getlocaldata.setItem('list1',this.arrData);
      this.getlocaldata.setItem('list2',this.dataA);
    }
    //从已完成到正在进行
    changeData2(i){
      this.arrData.push(this.dataA[i])
      this.dataA.splice(i,1);
      //获取（更新）list1 list2缓存
      this.getlocaldata.setItem('list1',this.arrData);
      this.getlocaldata.setItem('list2',this.dataA);
    }
    delData(i){
      this.arrData.splice(i,1);
      //获取（更新）list1缓存
      this.getlocaldata.setItem('list1',this.arrData);
    }
    delData2(i){
      this.dataA.splice(i,1);
       //获取（更新）list2缓存
      this.getlocaldata.setItem('list2',this.dataA);
    }
}
