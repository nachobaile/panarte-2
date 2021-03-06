import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username:string;
  password:string;
  error:string;
  constructor(public session:SessionService, public router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login(){
    this.session.login(this.username,this.password)
    .subscribe(user => {
      console.log('te ejecuto a ti')
      this.router.navigate(["home"])
      console.log(`Welcome ${user.username}`
    )});
    
    
    
  }
  signup(){
    this.session.signup(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe();
  }



  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe(() => {
      this.router.navigate([""])    
  })
}
}
