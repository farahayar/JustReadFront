import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  url = "./../assets/logo.png";

  constructor(private router: Router, private _us: UserService) { }
  isLogged: boolean = false;

  ngOnInit() {
    if (this._us.isLoggedUser() || this._us.isLoggedAdmin()) {
      this.isLogged = true;
    }
    else
      this.isLogged = false;

  }



  conn() {
    this.router.navigateByUrl('/Connection');
    // this.isLogged=false;

  }

  inscription() {
    this.router.navigateByUrl('/Subscribe');
    // this.isLogged=true;
  }

  deco() {
    localStorage.removeItem('token');
    localStorage.removeItem('idCart');
    this.isLogged = false;
    this.router.navigateByUrl('/Home');

  }

}
