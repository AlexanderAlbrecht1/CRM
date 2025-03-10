import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Customer } from '../../models/customer.class';
import { query } from '@angular/fire/firestore';
import { onSnapshot } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  customer: Customer[] = [];
  singleCustomer: any = {};
  firestore = inject(Firestore);

  unsubCustomer;
  // unsubSingleUser;

  constructor() {
    this.unsubCustomer = this.subCustomerList();
    // this.unsubSingleUser = this.subSingleUser(this.user.id);
  }

  async addCustomer(item: Customer) {
    const docRef = await addDoc(this.getCustomerRef(), item)
      .catch((err) => {
        console.log(err, 'dat hat nich jeklappt!');
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef?.id);
      });
  }

  subCustomerList() {
    const q = query(this.getCustomerRef());
    return onSnapshot(q, (list) => {
      this.customer = [];

      list.forEach((element) => {
        const singleCustomer = this.setUserObject(element.data(), element.id)
        if (singleCustomer.new === true) {
          this.customer.push(singleCustomer);
          console.log(singleCustomer.new);

        }
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

  setUserObject(obj: any, id: string): Customer {
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
      new: obj.new,
      existing: obj.existing,
      vip: obj.vip,
    };
  }

  getCustomerRef() {
    return collection(this.firestore, 'customer');
  }
}
