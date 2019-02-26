import { LoginService } from './../communs/services/login.services';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  estConnecte = false;
  role = '';
  form: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      login :['',
              
            ],
      password:['',
               ]
    }); 
    
  }

  ngOnInit() {

 
   
  }
  get login(){
    return this.form.get('login');
  }

  get password(){
    return this.form.get('password');
  }
 
  loginUtilisateur(){
   console.log("helo");
  }

  loginAdmin(){
   
  }

  tester(){
   
    if(this.form.get('login') && this.form.get('password')){
      return this.estConnecte = true;
    }
    
  }
}
