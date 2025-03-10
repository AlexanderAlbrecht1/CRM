import { Component } from '@angular/core';
import { Customer } from './../../models/customer.class';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DialogAddCustomerComponent } from '../dialog-add-customer/dialog-add-customer.component';

@Component({
  selector: 'app-existing-customers-overview',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './existing-customers-overview.component.html',
  styleUrl: './existing-customers-overview.component.scss',
})
export class ExistingCustomersOverviewComponent {

    customer = new Customer();
    customerList: Customer[] = [];

    constructor(
      public dialog: MatDialog,
      private firebaseService: FirebaseService
    ) {}

    getNewCustomerList(): Customer[] {
      return this.firebaseService.ExistingCustomer;
      // console.log(this.firebaseService.user);
    }

}
