import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'view-photo',
  templateUrl: 'view-photo.html'
})
export class ViewPhoto {

  photos;

  closePopup() {
    this.viewController.dismiss();
  }

  constructor(public navCtrl: NavController, public viewController: ViewController, params: NavParams) {
	this.photos = params.get('photos');
  }

}
