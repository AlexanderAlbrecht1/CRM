import { Customer } from './../../models/customer.class';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete-customer',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dialog-delete-customer.component.html',
  styleUrl: './dialog-delete-customer.component.scss',
})
export class DialogDeleteCustomerComponent {
  customer!: Customer;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  deleteCustomer(customer: any) {
    if (customer.new === true) {
      this.firebaseService
        .deleteCustomer(customer.id)
        .then(() => {
          this.router.navigate(['/newCustomersOverview']);
        })
        .catch((error) => console.error('Fehler beim Löschen:', error));
    } else if ( customer.existing === true) {
      this.firebaseService
      .deleteCustomer(customer.id)
      .then(() => {
        this.router.navigate(['/existingCustomersOverview']);
      })
      .catch((error) => console.error('Fehler beim Löschen:', error));
    } else if (customer.vip === true) {
      this.firebaseService
      .deleteCustomer(customer.id)
      .then(() => {
        this.router.navigate(['/vipCustomersOverview']);
      })
      .catch((error) => console.error('Fehler beim Löschen:', error));
    }
  }
}
