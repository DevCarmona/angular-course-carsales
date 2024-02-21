import { Component, OnInit } from '@angular/core';
import { RequestLogin } from '../../resources/models/RequestLogin';
import { LoginService } from '../../resources/services/login.service';
import { AlertService } from '../../resources/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;

  constructor(
    private loginService: LoginService, 
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.router.navigate(['dashboard']);
      },
      (httpError) => {
        this.alertService.error(httpError.error.message);
      }
    );
  }
}