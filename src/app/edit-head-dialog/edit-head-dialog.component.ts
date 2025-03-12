import { Customer } from '../../models/customer.class';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FirebaseService } from '../services/firebase.service';
import { doc, updateDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';

@Component({
  selector: 'app-edit-head-dialog',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatLabel,
    MatDialogActions,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './edit-head-dialog.component.html',
  styleUrl: './edit-head-dialog.component.scss',
})
export class EditHeadDialogComponent {
  customer!: Customer;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone!: string;
  firestore = inject(Firestore);

  constructor(
    public dialogRef: MatDialogRef<EditHeadDialogComponent>,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.firstName = this.customer.firstName;
    this.lastName = this.customer.lastName;
    this.email = this.customer.email;
    this.phone = this.customer.phone;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  async saveHead(user: any) {
    const userAdressRef = doc(this.firestore, 'customer', user.id);
    await updateDoc(userAdressRef, {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
    });
    this.closeDialog();
  }
}
