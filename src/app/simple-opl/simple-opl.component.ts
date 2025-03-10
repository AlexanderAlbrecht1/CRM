import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-simple-opl',
  standalone: true,
  imports: [MatCardModule,MatCheckboxModule, FormsModule, CommonModule, MatIcon],
  templateUrl: './simple-opl.component.html',
  styleUrl: './simple-opl.component.scss'
})
export class SimpleOPLComponent {

  checked = false;

  openDialog() {
    console.log('hier entsteht eine neue Dialogbox');

  }

}
