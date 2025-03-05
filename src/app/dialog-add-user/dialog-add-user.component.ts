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
import { FormsModule } from '@angular/forms';

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
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {

  constructor(public firebaseService: FirebaseService) {}

  // firestore = inject(Firestore);
  user = new User();
  birthDate: Date = new Date('');

  async saveUser() {
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
    };
    this.firebaseService.addUser(user)
  }
}
