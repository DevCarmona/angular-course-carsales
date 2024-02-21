import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpCliente: HttpClient, private authService: AuthService) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>  {
    return this.httpCliente.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin).pipe(tap((loginResponse) => (this.authService.loginResponse = loginResponse)));
  }
}
