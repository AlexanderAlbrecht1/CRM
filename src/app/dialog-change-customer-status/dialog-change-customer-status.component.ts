import { Customer } from './../../models/customer.class';
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { doc, updateDoc } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core';

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-change-customer-status',
  standalone: true,
  imports: [
    MatDialogContent,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogActions,
  ],
  templateUrl: './dialog-change-customer-status.component.html',
  styleUrl: './dialog-change-customer-status.component.scss',
})
export class DialogChangeCustomerStatusComponent {
  selectedValue!: string;
  customer!: Customer;
  customerStatus: string = ' ';
  firestore = inject(Firestore);

  constructor(
    public dialogRef: MatDialogRef<DialogChangeCustomerStatusComponent>,
    public firebaseService: FirebaseService
  ) {}

  stati: Status[] = [
    { value: 'Neukunde', viewValue: 'Neukunde' },
    { value: 'Bestandskunde', viewValue: 'Bestandskunde' },
    { value: 'V.I.P.', viewValue: 'V.I.P.' },
  ];

  ngOnInit() {
    if (this.customer.new === true) {
      this.customerStatus = 'Neukunde';
    } else if (this.customer.existing === true) {
      this.customerStatus = 'Bestandskunde';
    } else if (this.customer.vip === true) {
      this.customerStatus = 'V.I.P.';
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  async saveNewStatus(customer: any) {
    const custStatRef = doc(this.firestore, 'customer', customer.id);
    if (this.selectedValue === 'Bestandskunde') {
      await updateDoc(custStatRef, {
        new: false,
        existing: true,
        vip: false,
      });
      this.closeDialog();
    }
  }
}
