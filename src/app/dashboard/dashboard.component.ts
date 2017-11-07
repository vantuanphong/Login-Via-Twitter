import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tweetsdata;
  constructor(private http: Http, private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      var oauth_token = params['oauth_token'];
      var oauth_token_secret = params['oauth_token_secret'];
      var user_id = params['user_id'];
      var screen_name = params['screen_name'];
      console.log(user_id);
      var headers = new Headers();
      var screenname = 'screenname='+screen_name;      
      headers.append('Content-Type', 'application/X-www-form-urlencoded');  
      headers.append('Authorization',screenname+"&"+oauth_token+"&"+oauth_token_secret);    
      this.http.post('http://localhost:3000/usertimeline', screenname, {headers: headers}).subscribe((res) => {        
        this.tweetsdata = res.json().data;   
      });
    });
  }

  logout = () =>{
    this.router.navigate(['/login']);
  }

}
