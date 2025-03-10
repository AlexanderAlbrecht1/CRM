import { Component } from '@angular/core';
import { Customer } from './../../models/customer.class';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DialogAddCustomerComponent } from '../dialog-add-customer/dialog-add-customer.component';

@Component({
  selector: 'app-new-customers-overview',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './new-customers-overview.component.html',
  styleUrl: './new-customers-overview.component.scss',
})
export class NewCustomersOverviewComponent {
  customer = new Customer();
  customerList: Customer[] = [];

  constructor(
    public dialog: MatDialog,
    private firebaseService: FirebaseService
  ) {}

  getNewCustomerList(): Customer[] {
    return this.firebaseService.customer;
    // console.log(this.firebaseService.user);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddCustomerComponent, {});
  }
}
