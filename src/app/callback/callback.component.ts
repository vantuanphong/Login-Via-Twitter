import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private http: Http, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var url = 'http://localhost:3000/accesstoken';
    var headers = new Headers();

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      var oauth_token = params['oauth_token'];
      var oauth_verifier = params['oauth_verifier'];
      var final = 'OAuth oauth_token="' + oauth_token + '", oauth_verifier="' + oauth_verifier + '"';
      headers.append('Authorization', final);
      this.http.get(url, {
        headers: headers
      }).subscribe(res => {
        var getData = JSON.parse(res["_body"]);
        console.log(getData);
        window.location.href= "http://localhost:4200/dashboard?"+getData['data'];
      })
    });


  }

}
