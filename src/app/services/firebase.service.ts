import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { query } from '@angular/fire/firestore';
import { onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user: User [] = [];
  firestore = inject(Firestore);

  unsubUser;

  constructor() {
    this.unsubUser = this.subUserList();
  }

  async addUser(item : User) {
    const docRef = await addDoc(this.getUserRef(), item).catch (
      (err) => {console.log(err, 'dat hat nich jeklappt!')}
    ).then (
        (docRef) => {console.log("Document written with ID: ", docRef?.id)}
      )
  }

  subUserList() {
    const q = query(this.getUserRef());
    return onSnapshot(q, (list) => {
      this.user = [];
      list.forEach((element) => {
        this.user.push(this.setUserObject(element.data(), element.id));
      });
    });
  }

  setUserObject(obj: any, id: string): User {
    return {
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      birthDate: obj.birthDate || '',
      street: obj.street || '',
      address2 : obj.address2 || '',
      city: obj.city || '',
      zipCode: obj.zipCode || '',
    };
  }

  getUserRef() {
    return collection(this.firestore, 'user');
  }
}
