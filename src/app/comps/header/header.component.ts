import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userFirstName: any = '';
  ngOnInit(): void {
    this.getName();
  }

  constructor(private dialog: MatDialog){}

  getName() {
    if (typeof window !== 'undefined') {
      this.userFirstName = window.localStorage.getItem('angularName');
    }
  }
  openAbout(){
    this.dialog.open(AboutComponent, {
      width: 'auto', height: '500px'
    })
  }

}
