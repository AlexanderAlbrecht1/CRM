import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  currentDate: string = '';
  private intervalId: any;
  newCustomers:any;

  constructor(private firebaseService: FirebaseService) {};

  ngOnInit(): void {
    this.updateDateTime();
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
    this.getCountNewCustomers();
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    this.currentDate = now.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getCountNewCustomers() {
    this.newCustomers = this.firebaseService.countCostumers();
  }
}
