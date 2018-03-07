import { Component } from '@angular/core';
import { SessionService } from '../services/session.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMPAN-ARTE';
  user;
  constructor(public session:SessionService){
    this.user=this.session.getUser();
    this.session.getUserEvent()
  }
}
