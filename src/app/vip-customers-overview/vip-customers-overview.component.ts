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

@Component({
  selector: 'app-vip-customers-overview',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterLink,
  ],

  templateUrl: './vip-customers-overview.component.html',
  styleUrl: './vip-customers-overview.component.scss',
})
export class VipCustomersOverviewComponent {
  customer = new Customer();
  customerList: Customer[] = [];

  constructor(
    public dialog: MatDialog,
    private firebaseService: FirebaseService
  ) {}

  getVipCustomerList(): Customer[] {
    return this.firebaseService.vipCustomer;
    // console.log(this.firebaseService.user);
  }
}
