import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{

  constructor(
    private _auth: AuthService,
  ) {
  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('auth-token')
    if(potentialToken !== null) {
      this._auth.setToken(potentialToken)
    }
  }
}
