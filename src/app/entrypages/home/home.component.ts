import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginpageComponent } from './loginpage/loginpage.component';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog){}
  ngOnInit(): void {
//    throw new Error('Method not implemented.');
  }

  openLogin(){
    this.dialog.open(LoginpageComponent, {
      width: '500px', height: 'auto'
    })
  }

}
