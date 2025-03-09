import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../../models/user.class';
import { doc, getDoc } from "firebase/firestore";
import { inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {MatIconModule} from '@angular/material/icon';
import { EditAddressDialogComponent } from '../edit-address-dialog/edit-address-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { EditHeadDialogComponent } from '../edit-head-dialog/edit-head-dialog.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule,MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  user: any = {};
  singleUserId = '';
  firestore = inject(Firestore);

  constructor(private route:ActivatedRoute, private firebaseService: FirebaseService, public dialog: MatDialog){}

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

  openEditAddressDialog(singleUser:any):void {
    const dialogRef = this.dialog.open(EditAddressDialogComponent, {
        });
        dialogRef.componentInstance.user = singleUser;
    console.log(singleUser);

  }

  openEditHeaderDialog(singleUser:any):void {
    const dialogRef = this.dialog.open(EditHeadDialogComponent, singleUser);
    console.log(singleUser);
  }
}
