import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { TopicService } from '../../app/topic/topic.service';
import { TopicPage } from '../topic/topic';

@Component({
  templateUrl: 'forum.html',
  providers: [TopicService],
})
export class ForumPage {
  forum:any;
  tabs;
  title;

  isLogged() {
  }
  
  goToTopic(id) {
	this.navCtrl.push(TopicPage,{'id': id});
  }
  
  getForum() {	
	this.topicService.getAll().subscribe(success => {
		this.forum = success;
	});
  }
 
  constructor(public modalCtrl: ModalController, private topicService: TopicService,public navCtrl: NavController, public events: Events) {
	this.getForum();
	this.tabs = ['FR','PA','HS','test'];
	this.title = '';
	
	this.events.subscribe('tab', (data) => {
		
		console.log('test');
		console.log(data);
		this.title = data.name;
	});
  }
}
