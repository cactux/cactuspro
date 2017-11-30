import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForumPage } from '../forum/forum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  goToForum() {
	this.navCtrl.push(ForumPage);
  }

  constructor(public navCtrl: NavController) {

  }

}
