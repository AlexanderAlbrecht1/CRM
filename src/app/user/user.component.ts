import { Customer } from './../../models/customer.class';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { DialogAddCustomerComponent } from '../dialog-add-customer/dialog-add-customer.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {

  customer = new Customer();
  customerList: Customer[] = [];

  constructor(public dialog: MatDialog, private firebaseService: FirebaseService) {  }



  getCustomerList(): Customer[] {
    return this.firebaseService.customer
    // console.log(this.firebaseService.user);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddCustomerComponent, {
    });
  }
}
