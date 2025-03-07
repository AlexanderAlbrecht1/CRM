import { FirebaseService } from './../services/firebase.service';
import { User } from './../../models/user.class';
import { Component, Input } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
// import { User } from '../../models/user.class';
import { FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
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
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  constructor(
    public firebaseService: FirebaseService,
    public dialogRef: MatDialogRef<DialogAddUserComponent>
  ) {}

  // firestore = inject(Firestore);
  user = new User();
  birthDate: Date = new Date('');
  loading: boolean = false;

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log('user is', this.user);

    let user: User = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      birthDate: this.user.birthDate,
      street: this.user.street,
      address2: this.user.address2,
      city: this.user.city,
      zipCode: this.user.zipCode,
      email: this.user.email,
      id: this.user.id
    };
    this.firebaseService.addUser(user);
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
