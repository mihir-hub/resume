import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog){}
  userFirstName: any = '';
  ngOnInit(): void {
//    throw new Error('Method not implemented.');
this.getName();  
}

  getName() {
    if (typeof window !== 'undefined') {
      this.userFirstName = window.localStorage.getItem('angularName');
    }
  }

  openContact(){
this.dialog.open(ContactComponent, {
  height: 'auto', width: 'auto'
})
  }

}
