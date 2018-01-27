import { Component, Input, OnInit } from '@angular/core';

import { Events } from 'ionic-angular';

@Component({
  selector: 'angular-tab',
  templateUrl: 'angular-tab.html',
})

export class AngularTab implements OnInit {
	@Input() tabs:any;
	@Input() max:any;
	other;
	
	launchEvent(event,$data) {
		this.events.publish(event, $data);
	}
	
	otherTab() {
		this.other = !this.other;
	}
	
	ngOnInit(): void {
		this.other = false;
		this.events.publish('tab', {'name':this.tabs[0]});
    }
    
    constructor(public events: Events) {
		
    }
}

