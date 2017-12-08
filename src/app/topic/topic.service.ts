import { Injectable } from '@angular/core';

@Injectable()
export class TopicService {
  private topics;
  private _db;

	add(topic) {
	}   

	update(topic) {
	}

	delete(topic) {
	}
	
	getAll() {
		return this.topics;
	}
  
	constructor() {
		this.topics = {
			'name':'general',
			'topics':[
				{
					'title':'title1',
					'description':'description1'
				},
				{
					'title':'title2',
					'description':'description2'
				},
				{
					'title':'title3',
					'description':'description3'
				}
			]
		};
	}
}
