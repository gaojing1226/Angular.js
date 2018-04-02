import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelloPage } from '../hello/hello';
import { Http} from "@angular/http";  
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,public http:Http,private alertCtrl: AlertController) {
  }

  goIndex(){
    this.http.get('http://datainfo.duapp.com/shopdata/userinfo.php').subscribe(data=>{
      console.log("登录成功");
      this.navCtrl.push(HelloPage,{name:'主页'});
    },err=>{
      console.log(err);
      this.presentAlert();
    })
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: '发生错误',
      subTitle: '请求失败',
      buttons: ['确认']
    });
    alert.present();
  }




}
