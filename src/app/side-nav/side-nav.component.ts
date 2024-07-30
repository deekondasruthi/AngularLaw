import { Component } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {


  constructor(private login : LoginService,public router : Router)
  {

  }

  logout()
  {
    this.login.logout();
  }


  payment()
  {
    this.router.navigateByUrl(`/side-nav/payment`)
  }
  application()
  {
    this.router.navigateByUrl(`/side-nav/view-form`)
  }
}
