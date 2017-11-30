import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { TopicService } from '../../app/topic/topic.service';

@Component({
  templateUrl: 'forum.html',
  providers: [TopicService],
})
export class ForumPage {
  forum:any	;

  isLogged() {
  }
  
  showLoginPopup() {
  }
  
  getForum() {	
	this.forum = this.topicService.getAll();
  }
 
  constructor(public modalCtrl: ModalController, private topicService: TopicService) {
	this.getForum();
  }
}
