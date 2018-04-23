import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PublishPage } from '../publish/publish';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }


  goPublish(){
    this.navCtrl.push(PublishPage);
  }


}
