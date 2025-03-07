import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  singleUserId = '';

  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    this.singleUserId = this.route.snapshot.paramMap.get('id') || '';
    console.log('id   ' + this.singleUserId);

  }
}
