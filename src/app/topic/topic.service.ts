import { Injectable } from '@angular/core';

@Injectable()
export class TopicService {
  private topics:any;
  private _db;

	add(topic) {
	}   

	update(topic) {
	}

	delete(topic) {
	}
	
	getById(id) {
		let ret;
		this.topics.topics.forEach((topic) => {
			if (topic.id == id) {
				ret = topic;
				return;
			}
		});
		return ret;
	}
	
	getAll() {
		return this.topics;
	}
  
	constructor() {
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
