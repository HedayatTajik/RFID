import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  studentsRef!: AngularFireList<any>;
  studentRef!: AngularFireObject<any>;

  constructor(
    private firestore: AngularFirestore,
    
  ) { }


  getData(): Observable<any> {

    // const shirtsCollection = this.firestore.collection<any>('tshirts');
    // shirtsCollection.add({ name: 'item', price: 10 });
    return this.firestore.collection('UsersEntity').valueChanges();
  }

}



//https://www.youtube.com/watch?v=IoVOFdSZqzk