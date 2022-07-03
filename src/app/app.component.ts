import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'deployment-front';
  
  url_API = 'https://api.github.com/repos/CoverMyMeds-Pharmacy/ContinuousDeliveryAPI/issues?state=all';
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'token '+ environment.GITHUBTOKEN);


  constructor(private http: HttpClient){

  }

  onIssueCreate(issues: {inputemail:string, inputtitle: string, inputBody: string, inputLabel: string}){
    console.log(issues);
    var eachIssues = {
                           "title": issues.inputtitle,
                           "body": "Propbm API",
                           "assignees": [issues.inputBody],
                           "labels":["API",issues.inputLabel],

                       };
    this.http.post(this.url_API, eachIssues, { 'headers': this.headers } ).subscribe((res) => {
      console.log(res);
    });
  }
  
}
