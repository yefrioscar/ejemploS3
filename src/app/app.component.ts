import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from './item.model';
import { ItemComponent } from './item.component';



const BASE_URL = '127.0.0.1:8080/items/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
  private books:string[] = [];

  constructor(private http: Http){ }

/*
  search(title: string) {

    this.books = [];

    let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:"+title;
    this.http.get(url).subscribe(
      response => {
        let data = response.json();
        for(var i=0;i<data.items.length;i++){
          let bookTitle = data.items[i].volumeInfo.title;
          this.books.push(bookTitle);
        }
      },
      error => console.log(error)
    );
  }
  
  */
  
  private items: Item[] = [];
  private itemsDone: Item[] = [];


  ngOnInit() {
		this.refresh();
	}

	private refresh() {
		this.http.get(BASE_URL).subscribe(
			response => this.items = response.json(),
			error => console.log(error)
		);
	}

  

  add(description:string) {
    let item ={
      description,
      done:false
    }

    this.http.post(BASE_URL, item).subscribe(
      responde => this.refresh(),
      error => console.log(error)
    );
  }




   done(item: Item) {
    let index = this.items.indexOf(item);

    this.itemsDone.push({
      description: item.description,
      done:true
    })

    console.log(this.itemsDone);


    if(index > -1){
      this.items.splice(index,1);
    }
  }




  addItems(item: Item) {
    let index = this.itemsDone.indexOf(item);

    this.items.push({
      description: item.description,
      done:true
    })

    if(index > -1){
      this.itemsDone.splice(index,1);
    } 
  }

 

  removeItem(item: Item) {
    let index = this.items.indexOf(item);
    console.log("holitas");
    if(index > -1){
      this.items.splice(index,1);
    }
    
  }

  removeItemDone(item: Item) {
    let index = this.itemsDone.indexOf(item);
    console.log('Im here');
    if(index > -1){
      this.itemsDone.splice(index,1);
    }
    
  }
  

}
