import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {MatIconModule} from '@angular/material/icon';
import { EditAddressDialogComponent } from '../edit-address-dialog/edit-address-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { EditHeadDialogComponent } from '../edit-head-dialog/edit-head-dialog.component';


@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule,MatMenuModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})
export class CustomerDetailComponent {

  customer: any = {};
  singleCustomerId = '';
  firestore = inject(Firestore);

  unsubCustomer;

  constructor(private route:ActivatedRoute, private firebaseService: FirebaseService, public dialog: MatDialog){
    this.unsubCustomer = this.subSingleCustomer();
  }

  // async ngOnInit() {
  //   // this.getId();
  //   // this.getSingleUser(this.singleUserId)
  // }

  async subSingleCustomer() {
    this.getId()
    const docRef = doc(this.firestore, 'customer', this.singleCustomerId);
    return onSnapshot(doc(this.firestore, "customer", this.singleCustomerId), (doc) => {
      this.customer = doc.data();
      this.customer.id = this.singleCustomerId;
    });
  }

  getId() {
    this.singleCustomerId = this.route.snapshot.paramMap.get('id') || '';
  }

  openEditAddressDialog(singleCustomer:any):void {
    const dialogRef = this.dialog.open(EditAddressDialogComponent, {
        });
        dialogRef.componentInstance.customer = singleCustomer;
    console.log(singleCustomer);

  }

  openEditHeaderDialog(singleCustomer:any):void {
    const dialogRef = this.dialog.open(EditHeadDialogComponent);
    dialogRef.componentInstance.customer = singleCustomer;
    console.log(singleCustomer);
  }

}
