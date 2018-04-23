import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info: string = "find-info";
  isAndroid: boolean = false;
  @ViewChild(Slides) slides: Slides;
  
  items=[{
    name:'资产包收购',
    diqu:'地区：',
    beijing:'北京',
    laiyuan:'来源：',
    yinhang:'银行',
    leixing:'类型：',
    diya:"抵押",
    money1:"500万",
    price1:"总金额",
    money2:"300万",
    price2:"转让价"
  },
  {
    name:'委外催收',
    diqu:'地区：',
    beijing:'北京',
    laiyuan:'来源：',
    yinhang:'银行',
    leixing:'类型：',
    diya:"抵押",
    money1:"100万",
    price1:"金额",
  },
  {
    name:'法律服务',
    diqu:'地区：',
    beijing:'北京',
    laiyuan:'来源：',
    yinhang:'银行',
    leixing:'类型：',
    diya:"抵押",
    money1:"咨询",
    price1:"需求",
  }];

  constructor(public navCtrl: NavController,platform: Platform) { 
    this.isAndroid = platform.is('android');
   }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
        this.items.push({
          name:'资产包收购',
          diqu:'地区：',
          beijing:'北京',
          laiyuan:'来源：',
          yinhang:'银行',
          leixing:'类型：',
          diya:"抵押",
          money1:"500万",
          price1:"总金额",
          money2:"300万",
          price2:"转让价"
        },
        {
          name:'委外催收',
          diqu:'地区：',
          beijing:'北京',
          laiyuan:'来源：',
          yinhang:'银行',
          leixing:'类型：',
          diya:"抵押",
          money1:"100万",
          price1:"金额",
        },
        {
          name:'法律服务',
          diqu:'地区：',
          beijing:'北京',
          laiyuan:'来源：',
          yinhang:'银行',
          leixing:'类型：',
          diya:"抵押",
          money1:"咨询",
          price1:"需求",
        });

      infiniteScroll.complete();
      if(this.items.length==9){
        console.log(this.items.length);
        infiniteScroll.enable(false);
      }
    }, 500);
  }

  //<幻灯片
  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.loop=true;
    this.slides.autoplay=1000;
  }
}
