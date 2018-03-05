import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
error
  constructor(public session: SessionService) { }
  title = 'EMPAN-ARTE';
  ngOnInit() {
  }
  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
}
