import { Component } from '@angular/core';
import { TopicService } from '../../app/topic/topic.service';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'topic.html',
  providers: [TopicService],
})
export class TopicPage {
  topic;
  id;
  
  getTopic() {
	this.topic = this.topicService.getById(this.id);
  }
 
  constructor(public navCtrl: NavController,public navParams: NavParams, public topicService:TopicService) {
	this.id = this.navParams.get('id');
	this.getTopic();
  }
}
