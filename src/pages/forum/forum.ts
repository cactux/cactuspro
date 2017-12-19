import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { TopicService } from '../../app/topic/topic.service';
import { TopicPage } from '../topic/topic';

@Component({
  templateUrl: 'forum.html',
  providers: [TopicService],
})
export class ForumPage {
  forum:any;
  
  FR = TopicPage;
  PA = TopicPage;
  HS = TopicPage;

  isLogged() {
  }
  
  goToTopic() {
	console.log('coucou');
	this.navCtrl.push(TopicPage);
  }
  
  getForum() {	
	this.forum = this.topicService.getAll();
  }
 
  constructor(public modalCtrl: ModalController, private topicService: TopicService,public navCtrl: NavController) {
	this.getForum();
  }
}
