import { Component } from '@angular/core';
import { TopicService } from '../../app/topic/topic.service';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  templateUrl: 'topic.html',
  providers: [TopicService],
})
export class TopicPage {
  topic;
  id;
  reply;
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
  
  takePhoto () {
    this.camera.getPicture({
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
 
  constructor(public navCtrl: NavController,public navParams: NavParams, public topicService:TopicService, private camera: Camera) {
	this.id = this.navParams.get('id');
	this.getTopic();
  }
}
