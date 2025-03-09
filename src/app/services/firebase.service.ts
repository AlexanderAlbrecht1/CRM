import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { query } from '@angular/fire/firestore';
import { onSnapshot } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  user: User[] = [];
  singleUser: any = {};
  firestore = inject(Firestore);

  unsubUser;
  // unsubSingleUser;

  constructor() {
    this.unsubUser = this.subUserList();
    // this.unsubSingleUser = this.subSingleUser(this.user.id);
  }

  async addUser(item: User) {
    const docRef = await addDoc(this.getUserRef(), item)
      .catch((err) => {
        console.log(err, 'dat hat nich jeklappt!');
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef?.id);
      });
  }

  subUserList() {
    const q = query(this.getUserRef());
    return onSnapshot(q, (list) => {
      this.user = [];
      list.forEach((element) => {
        this.user.push(this.setUserObject(element.data(), element.id));
        // console.log(element.data());
      });
    });
  }

  // async subSingleUser(docId: string) {
  //   const docRef = doc(this.firestore, 'user', docId);
  //   this.singleUser = await getDoc(docRef);
  //   this.user = [];
  //   this.user.push(this.setUserObject(this.singleUser.data(), docId));
  //   console.log('Daten aus Firebaseservices:', this.user);
  //   // return this.user;
  // }

  setUserObject(obj: any, id: string): User {
    return {
      id: id || '',
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      birthDate: obj.birthDate || '',
      street: obj.street || '',
      address2: obj.address2 || '',
      city: obj.city || '',
      zipCode: obj.zipCode || '',
      email: obj.email || '',
    };
  }

  getUserRef() {
    return collection(this.firestore, 'user');
  }
}
