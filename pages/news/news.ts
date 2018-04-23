import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagelistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'pagg-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  item;
  constructor(public params:NavParams,public navCtrl: NavController, public navParams: NavParams) {
    this.item = params.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagelistsPage');
  }

}
