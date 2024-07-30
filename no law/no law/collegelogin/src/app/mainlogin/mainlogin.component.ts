import {
  Component,
  Inject,
  Injector,
  OnInit,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { AppInjector } from '../app.module';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../Services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mainlogin',
  templateUrl: './mainlogin.component.html',
  styleUrl: './mainlogin.component.css',
})
export class MainloginComponent implements OnInit {
  service: LoginService;
  loginForm: any = FormGroup;
  error: unknown;
  constructor(
    injector: Injector,
    private myService: LoginService,
    private formBuilder: FormBuilder,
    // private dialog :MatDialog

  ) {
    this.service = injector.get(LoginService);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    //Add 'implements OnInit' to the class.
  }

  onSubmit(): void {

    if (this.loginForm.valid) {
      this.myService
      .login(this.loginForm.value.email, this.loginForm.value.password)
    }
    else{
      this.myService.loginError.subscribe((error) => {
        this.error = error;
      });
    }

 

   

  
      
  }

  // register()
  // {
  //   this.dialog.open(LoginComponent)
  // }

}
