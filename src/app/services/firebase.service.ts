import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Customer } from '../../models/customer.class';
import { query } from '@angular/fire/firestore';
import { onSnapshot } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { Task } from '../../models/task.class';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  task: Task[] = [];
  customer: Customer[] = [];
  ExistingCustomer: Customer[] = [];
  vipCustomer: Customer[] = [];
  singleCustomer: any = {};
  firestore = inject(Firestore);
  taskList:any = [];

  unsubNewCustomer;
  unsubExistingCustomer;
  unsubVipCustomer;
  unsubTask;
  // unsubSingleUser;

  constructor() {
    this.unsubNewCustomer = this.subNewCustomerList();
    this.unsubExistingCustomer = this.subExistingCustomerList();
    this.unsubVipCustomer = this.subVipCustomerList();
    this.unsubTask = this.subTaskList();
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

  async addTask(item: Task) {
    const docRef = await addDoc(collection(this.firestore, "tasks"), item) ;
    console.log("Document written with ID: ", docRef.id);
  }

  subNewCustomerList() {
    const q = query(this.getCustomerRef());
    return onSnapshot(q, (list) => {
      this.customer = [];

      list.forEach((element) => {
        const singleCustomer = this.setUserObject(element.data(), element.id)
        if (singleCustomer.new === true) {
          this.customer.push(singleCustomer);
          // console.log(singleCustomer.new);

        }
        // console.log(element.data());
      });
    });
  }

  subExistingCustomerList() {
    const q = query(this.getCustomerRef());
    return onSnapshot(q, (list) => {
      this.ExistingCustomer = [];

      list.forEach((element) => {
        const singleCustomer = this.setUserObject(element.data(), element.id)
        if (singleCustomer.existing === true) {
          this.ExistingCustomer.push(singleCustomer);
          // console.log(singleCustomer.new);

        }
        // console.log(element.data());
      });
    });
  }

  subVipCustomerList() {
    const q = query(this.getCustomerRef());
    return onSnapshot(q, (list) => {
      this.vipCustomer = [];

      list.forEach((element) => {
        const singleCustomer = this.setUserObject(element.data(), element.id)
        if (singleCustomer.vip === true) {
          this.vipCustomer.push(singleCustomer);
          console.log(singleCustomer.new);

        }
        // console.log(element.data());
      });
    });
  }
  subTaskList() {
    const q = query(this.getTaskRef());
    return onSnapshot(q, (list) => {
      this.task = [];

      list.forEach((element) => {
        const singleTask = this.setTaskObject(element.data())
        // if (singleCustomer.vip === true) {
          this.task.push(singleTask);
        //   console.log(singleCustomer.new);

        // }
        console.log(element.data());
      });
    });
  }

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

  setTaskObject(obj:any):Task {
    return {
      task: obj.task || '',
      done: false,
    }
  }

  getCustomerRef() {
    return collection(this.firestore, 'customer');
  }

  getTaskRef() {
    return collection(this.firestore, 'tasks');
  }
}
