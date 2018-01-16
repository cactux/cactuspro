import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../app.conf';

@Injectable()
export class TopicService {
  private topics:any;
  private _db;
  private apiUrl;

	add(topic) {
		return this.http.post(this.apiUrl,topic);
	}
	
	viewTopic(topic) {
		topic.haveNotReadMessage = true;
		return this.update(topic);
	}

	update(topic) {
		let params = new HttpParams().set('id', topic.id);
		return this.http.put(this.apiUrl,topic,{'params':params});
	}

	delete(topic) {
		let params = new HttpParams().set('id', topic.id);
		return this.http.delete(this.apiUrl,{'params':params});
	}
	
	getById(id) {
		let params = new HttpParams().set('id', topic.id);
		return this.http.get(this.apiUrl,{'params':params});
	}
	
	getAll() {
		return this.http.get(this.apiUrl);
	}
  
	constructor(private http: HttpClient) {
		this.apiUrl = config.api + '/topics';
		this.topics = {
			'name':'general',
			'topics':[
				{
					'id':'1',
					'title':'title1',
					'description':'description1',
					'author':'jeremy',
					'haveNotReadMessage':false,
					'messages':[
						{
							'author':'jeremy',
							'date':'2018-01-01',
							'text':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant de'
						},
						{
							'author':'yann',
							'date':'2018-01-01',
							'text':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant de'
						},
						{
							'author':'jeremy',
							'date':'2018-01-01',
							'text':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant de'
						}
					]
				},
				{
					'id':'2',
					'title':'title2',
					'description':'description2',
					'author':'yann',
					'haveNotReadMessage':true,
					'messages':[
						{
							'author':'yann',
							'date':'2018-01-01',
							'text':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant de'
						},
						{
							'author':'jeremy',
							'date':'2018-01-01',
							'text':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant de'
						}
					]
				},
				{
					'id':'3',
					'title':'title3',
					'description':'description3',
					'author':'luna',
					'haveNotReadMessage':false,
					'messages':[
						{
							'author':'luna',
							'date':'2018-01-01',
							'text':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant de'
						}
					]
				}
			]
		};
	}
}
