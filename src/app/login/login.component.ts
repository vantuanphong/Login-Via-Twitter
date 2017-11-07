import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http, public router: Router) { }

  ngOnInit() {
  }

  logintwitter() {
    var headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', { headers: headers }).subscribe((res) => {
      var getResToken = JSON.parse(res['_body']);
      var getStrOauthToken  = getResToken.data.split('&');
      var dataOauthToken = getStrOauthToken[0];
      console.log(dataOauthToken);
      window.location.href= 'https://api.twitter.com/oauth/authenticate?'+dataOauthToken+"&force_login=false";
      //  this.router.navigate(['https://api.twitter.com/oauth/authenticate?'+dataOauthToken]);
    })
  }
}
