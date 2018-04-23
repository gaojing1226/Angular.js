import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NewslistPage } from '../newslist/newslist';
import { MyPage } from '../my/my';
import { SelecttypePage } from '../selecttype/selecttype';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SelecttypePage;
  tab3Root = NewslistPage;
  tab4Root = MyPage;
  constructor() {

  }
}
