import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { loginService } from '../communs/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  estConnecte = false;
  role = '';
  form: FormGroup;
  constructor(formBuilder: FormBuilder, private service: loginService) {
    this.form = formBuilder.group({
      login :['',
              
            ],
      password:['',
               ]
    }); 
    
  }

  ngOnInit() {

   this.service.getLoginStatus()
   .subscribe(
     status=>this.estConnecte = status
   );
   
  }
  get login(){
    return this.form.get('login');
  }

  get password(){
    return this.form.get('password');
  }
 
  loginUtilisateur(){
    this.service.mettreAjourMenu('utilisateur');
    this.service.mettreAjourStatus(true);
    this.role = 'utilisateur';
    console.log(this.role);
  }

  loginAdmin(){
    this.service.mettreAjourMenu('admin');
    this.service.mettreAjourStatus(true);
    this.role = 'admin';
  }

  tester(){
    if(this.login.value === "kalain20" && this.password.value === "12345")
    console.log( "''''''''''''''" );
    else
    console.log('Bad entry');
    
  }
}
