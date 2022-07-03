# DeploymentFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).



```bash
npm i -g @angular/cli @angular/pwa
ng version
ng new deployment-front
ng add @angular/pwa
cd deployment-front
ng serve 
git checkout -b gh-pages
npm install -g angular-cli-ghpages
ng build --configuration=production  --base-href https://uracilo.github.io/deployment-front/
ngh --dir=dist/deployment-front
```

## 2 Create a simple form on src/app/app.component.html

```bash
<div class="container">
    <form >
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input  type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input  type="title" class="form-control" id="inputTitle" placeholder="title">
    </div>
  </div>
  <div class="form-group col-md-4">
    <label for="inputBody">Address</label>
    <input   type="body" class="form-control" id="inputBody" placeholder="1234 Main St">
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">label</label>
      <select   id="inputLabel" class="form-control">
        <option  selected >Default</option>
        <option  >...</option>
      </select>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

</div>




```

Specify the name for each input or select 
ngModel name="name_of_input"


```bash
<div class="container">
    <form #issuesForm='ngForm' (ngSubmit)='onIssueCreate(issuesForm.value)'>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input ngModel name="inputemail"  type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input ngModel name="inputtitle"  type="title" class="form-control" id="inputTitle" placeholder="title">
    </div>
  </div>
  <div class="form-group col-md-4">
    <label for="inputBody">Address</label>
    <input  ngModel name="inputBody" type="body" class="form-control" id="inputBody" placeholder="1234 Main St">
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">label</label>
      <select ngModel name="inputLabel" id="inputLabel" class="form-control">
        <option  selected >Default</option>
        <option  >...</option>
      </select>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

</div>



```

Send THE DATA 

Include FormsModule on imports

```bash

import { FormsModule  } from '@angular/forms'
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
....

```

Specify local varibale on the form app.component.html
```bash

<form #issuesForm='ngForm' (ngSubmit)='onIssueCreate(issuesForm.value)'>
  <div class="form-row">
    <div class="form-group col-md-6">


```

Create the metod on the component class  app.component.ts

```bash

  onIssueCreate(issues: {inputemail:string, inputtitle: string, inputBody: string, inputLabel: string}){
    console.log(issues);
  }


```
CREATE THE POST SECCTION

Import HttpClientModule app.module.ts

```bash

import { HttpClientModule  } from '@angular/common/http';
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


```
Addd the library from Http Client and create a new contructor app.component.ts

```bash
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
```

Add your token of github on enviroments/enviroment.prd.ts
```bash
export const environment = {
  production: false,
    GITHUBTOKEN: 'TOKEN_GITHUB'

};
```
