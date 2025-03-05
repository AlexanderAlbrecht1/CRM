import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore = inject(Firestore);

  constructor() { }

  async addUser(item : User) {
    const docRef = await addDoc(this.getUserRef(), item).catch (
      (err) => {console.log(err, 'dat hat nich jeklappt!')}
    ).then (
        (docRef) => {console.log("Document written with ID: ", docRef?.id)}
      )
  }

  getUserRef() {
    return collection(this.firestore, 'user');
  }
}
