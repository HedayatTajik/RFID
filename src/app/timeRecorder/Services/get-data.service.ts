import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getData(): Observable<any> {
    return this.firestore.collection('TimeRecorder').valueChanges();
  }

}
