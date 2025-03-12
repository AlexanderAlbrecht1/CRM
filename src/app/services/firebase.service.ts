import { Task } from './../../models/task.class';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc } from '@angular/fire/firestore';
import { Customer } from '../../models/customer.class';
import { query } from '@angular/fire/firestore';
import { onSnapshot } from '@angular/fire/firestore';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';


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

  countCostumers() {
    return this.customer.length
  }

  countExistingCostumers() {
    return this.ExistingCustomer.length
  }

  countVipCostumers() {
    return this.vipCustomer.length
  }

  countTasks() {
    return this.task.length
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

  async updateTask(task: Task) {
    const taskRef = doc(this.getTaskRef(),task.id)
    await updateDoc(taskRef, {
    done: task.done
    });
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
          // console.log(singleCustomer.new);

        }
        // console.log(element.data());
      });
    });
  }

  // subTaskList() {
  //   const q = query(this.getTaskRef());
  //   return onSnapshot(q, (list) => {
  //     this.task = [];
  //     list.forEach((element) => {
  //       const singleTask = this.setTaskObject(element.data(), element.id)
  //         this.task.push(singleTask);
  //       console.log(element.data());
  //     });
  //   });
  // }

  subTaskList() {
    const q = query(this.getTaskRef());
    return onSnapshot(q, (list) => {
      this.task = [];
      list.forEach((element) => {
        const data = element.data();
        const id = element.id;
        const singleTask = this.setTaskObject(data, id);
        this.task.push(singleTask);
        // console.log(singleTask);
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

  setTaskObject(obj:any, id: string):Task {
    return {
      task: obj.task,
      done: obj.done,
      id: id,
    }
  }

  async deleteTask(id:string) {
    await deleteDoc(doc(this.getTaskRef(), id));
  }

  async deleteCustomer(id:string) {
    await deleteDoc(doc(this.getCustomerRef(), id));
  }

  async saveEditedTask(task:any) {
    const taskRef = doc(this.getTaskRef(), task.id);
        await updateDoc(taskRef, {
          task: task.task
        });
  }

  getCustomerRef() {
    return collection(this.firestore, 'customer');
  }

  getTaskRef() {
    return collection(this.firestore, 'tasks');
  }


}
