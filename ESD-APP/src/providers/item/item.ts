import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Item} from '../../interface/Item';

/*
  Generated class for the ItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemProvider {
    private itemsCollection: AngularFirestoreCollection<Item>;
    
  constructor(
    public afstore:AngularFirestore,
    public http: HttpClient) {
        
    this.itemsCollection = this.afstore.collection<Item>('items');    
  }
    
    getItems(){
        return this.itemsCollection.valueChanges();
    }
    addItem(item:Item){
        this.itemsCollection.add(item);
    }
    
    mockItems(){
        this.addItem({
            name:"hello",
            count:9,
            date:232444656,
        });
    }
}
