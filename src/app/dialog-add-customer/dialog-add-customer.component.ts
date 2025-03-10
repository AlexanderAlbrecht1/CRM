import { Component } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';
import { Customer } from '../../models/customer.class';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-customer',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-customer.component.html',
  styleUrl: './dialog-add-customer.component.scss'
})
export class DialogAddCustomerComponent {

  constructor(
    public firebaseService: FirebaseService,
    public dialogRef: MatDialogRef<DialogAddCustomerComponent>
  ) {}

  // firestore = inject(Firestore);
  customer = new Customer();
  birthDate: Date = new Date('');
  loading: boolean = false;

  async saveCustomer() {
    this.loading = true;
    this.customer.birthDate = this.birthDate.getTime();
    // console.log('user is', this.user);

    let customer: Customer = {
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      birthDate: this.customer.birthDate,
      street: this.customer.street,
      address2: this.customer.address2,
      city: this.customer.city,
      zipCode: this.customer.zipCode,
      email: this.customer.email,
      id: this.customer.id,
      new: this.customer.new,
      existing: this.customer.existing,
      vip: this.customer.vip,
    };
    this.firebaseService.addCustomer(customer);
    this.loading = false;
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  emailFormControl = new FormControl('', [
    // Validators.required,
    Validators.email,
  ]);

}
