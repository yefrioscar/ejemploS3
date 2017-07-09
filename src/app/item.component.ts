import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from './item.model';


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
    styleUrls: ['./app.component.css']
})


export class ItemComponent {
    
    
    


    @Input() private item: Item;

    @Output() private remove = new EventEmitter<any>();
    
    @Output() private addDone = new EventEmitter<Item>();

    @Output() private addToDo = new EventEmitter<Item>();


    addItems(item){
        this.addToDo.emit(item);
    }

    svgclass = {
        'svgDone': false 
    }


    done(item){
        this.addDone.emit(item);
    }

    fireRemove(){
        this.remove.emit();
    }

}
