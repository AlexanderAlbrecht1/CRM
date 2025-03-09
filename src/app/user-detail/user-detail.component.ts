import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../../models/user.class';
import { doc, getDoc } from "firebase/firestore";
import { inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  user: any = {};
  singleUserId = '';
  firestore = inject(Firestore);

  constructor(private route:ActivatedRoute, private firebaseService: FirebaseService){}

  async ngOnInit() {
    this.getId();
    this.getSingleUser(this.singleUserId)
  }

  async getSingleUser(id:string) {
    const docRef = doc(this.firestore, 'user', id);
    this.user = await getDoc(docRef);
    this.user = this.user.data();
  }

  getId() {
    this.singleUserId = this.route.snapshot.paramMap.get('id') || '';
  }

  showUserObject() {
    console.log(this.user);

  }
}
