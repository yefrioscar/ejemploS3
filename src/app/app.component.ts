import { Component } from '@angular/core';


interface Item {
  description: string,
  done: boolean
}

interface ItemDone {
  description: string,
  done: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  private items: Item[] = [];
  private itemsDone: ItemDone[] = [];
  
  add(description:string) {
    this.items.push({
      description,
      done:false
    });
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

  done(item: Item) {
    let index = this.items.indexOf(item);

    this.itemsDone.push({
      description: item.description,
      done:true
    })

    if(index > -1){
      this.items.splice(index,1);
    }
      
    
  }

  removeItem(item: Item) {
    let index = this.items.indexOf(item);

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
