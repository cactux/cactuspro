import { Component } from '@angular/core';
import { TopicService } from '../../app/topic/topic.service';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ViewPhoto } from '../view-photo/view-photo';
import { ToastController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  templateUrl: 'topic.html',
  providers: [TopicService, ImagePicker],
})
export class TopicPage {
  topic;
  id;
  reply;
  photoToSend;
  photos;
  base64Image: string;
  
  getTopic() {
	this.topicService.getById(this.id).subscribe(success => {
		this.topic = success[0];
		console.log(this.topic);
	});
  }
  
  sendReply() {
	this.topicService.add(this.reply);
  }
  
  viewPhoto() {
	let photoModal = this.modalCtrl.create(ViewPhoto, { photos: this.photos });
   photoModal.present();
  }
  
  pickPhoto() {
	let options = {
		maximumImagesCount:5
	};
	
	this.imagePicker.getPictures(options).then((results) => {
	  this.photos = results;
	}, (err) => { 
		let toast = this.toastCtrl.create({
			message: 'An error occurred',
			duration: 3000,
			position: 'top'
		});

		toast.present();
	});
  }
  
  takePhoto () {
    this.camera.getPicture({
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photoToSend = true;
    }, (err) => {
        console.log(err);
    });
  }
 
  constructor(public navCtrl: NavController,private toastCtrl: ToastController, private imagePicker: ImagePicker, public modalCtrl: ModalController,public navParams: NavParams, public topicService:TopicService, private camera: Camera) {
	this.id = this.navParams.get('id');
	this.getTopic();
	this.photoToSend = false;
	this.photos = [];
  }
}
