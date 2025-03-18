import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, TranslatePipe, TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  currentDate: string = '';
  currentWeekday: string = '';
  private intervalId: any;
  newCustomers: any;
  existingCustomers: any;
  vipCustomers: any;
  tasks: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateDateTime();
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
    setTimeout(() => {
      this.getCounters();
    }, 2000);
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
    this.currentWeekday = now.toLocaleDateString('de-DE', { weekday: 'long' });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getCounters() {
    this.newCustomers = this.firebaseService.countCostumers();
    this.existingCustomers = this.firebaseService.countExistingCostumers();
    this.vipCustomers = this.firebaseService.countVipCostumers();
    this.tasks = this.firebaseService.countTasks();
  }

  goToNewCustomer() {
    this.router.navigate(['/newCustomersOverview']);
  }

  goToExistingCustomer() {
    this.router.navigate(['/existingCustomersOverview']);
  }

  goToVipCustomer() {
    this.router.navigate(['/vipCustomersOverview']);
  }

  goToTasks() {
    this.router.navigate(['OPL']);
  }
}
