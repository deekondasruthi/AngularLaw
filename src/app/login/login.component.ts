import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { RegisterStudent } from '../modal/college-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  registrationForm:any= FormGroup;

  constructor(private fb: FormBuilder, private Login :LoginService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (!passwordControl || !confirmPasswordControl) {
      return { error: 'Controls not found' }; // Return an error object if controls are null
    }
  
    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
  
    return password === confirmPassword ? null : { mismatch: true };
  }
  

  onSubmit() {

    let SubmitModal : RegisterStudent ={

      name  : this.registrationForm.value.name,
      email : this.registrationForm.value.email,
      mobileNumber : this.registrationForm.value.mobile,
      password : this.registrationForm.value.password,
      
      
    }

    this.Login.StudentRegisters(SubmitModal).subscribe((res:any)=>{
      


    })
   
  }
}