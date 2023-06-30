import { Component } from '@angular/core';
import { environment } from './../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public env = environment;

  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'about', url: '/about', icon: 'alert-circle' },
    { title: 'contacts', url: '/contacts', icon: 'mail' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
