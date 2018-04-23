import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsPage } from '../news/news';

/**
 * Generated class for the NewslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newslist',
  templateUrl: 'newslist.html',
})

export class NewslistPage {
  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[{
      name:'资芽小助手',
      avatar:'assets/imgs/my.png',
      news:'请问需要什么帮助',
      time:'1:34 pm'
    },
    {
      name:'Woody',
      avatar:'assets/imgs/avatar2.png',
      news:'what are you doing',
      time:'2:34 pm'
    },
    {
      name:'Alice',
      avatar:'assets/imgs/my.png',
      news:'Hello,I am Alice',
      time:'3:34 pm'
    },
    {
      name:'Selina',
      avatar:'assets/imgs/avatar2.png',
      news:'Hello,I am Alice',
      time:'3:34 pm'
    }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewslistPage');
  }

  goNews(item){
    this.navCtrl.push(NewsPage,{ item: item });
  }
}
