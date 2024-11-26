import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = window.localStorage.getItem('angularName');
  email: string = 'jmihir2011@gmail.com';
  mobile: string = '7984304498';
  linkedin: string = 'https://linkedin.com/in/mj1605'
}
