import { Component, Input, OnInit } from '@angular/core';

import { Events } from 'ionic-angular';

@Component({
  selector: 'angular-tab',
  templateUrl: 'angular-tab.html',
})

export class AngularTab implements OnInit {
	@Input() tabs:any;
	@Input() max:any;
	
	launchEvent($data,event) {
		this.events.publish(event, $data);
	}
		
	ngOnInit(): void {
    }
    
    constructor(public events: Events) {
		
    }
}

