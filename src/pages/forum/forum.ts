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
  tabs;

  isLogged() {
  }
  
  goToTopic(id) {
	this.navCtrl.push(TopicPage,{'id': id});
  }
  
  getForum() {	
	this.forum = this.topicService.getAll();
  }
 
  constructor(public modalCtrl: ModalController, private topicService: TopicService,public navCtrl: NavController) {
	this.getForum();
	this.tabs = ['FR','PA','HS','test'];
  }
}
