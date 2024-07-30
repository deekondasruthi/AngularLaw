import {Injector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OPTComponent } from './opt/opt.component';
import { MainloginComponent } from './mainlogin/mainlogin.component';
export let AppInjector: Injector;
import { TestComponent } from './test/test.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ApplicationFormComponent } from './application-form/application-form.component'
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { FailurePaymentComponent } from './failure-payment/failure-payment.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { PreviewFormComponent } from './preview-form/preview-form.component';


const routes: Routes = [

  {
    path : 'mainlogin',
    component : MainloginComponent
  },

  {
    path : 'preview-form',
    component : PreviewFormComponent
  },
  {
    path : 'success-payment',
    component : SuccessPaymentComponent
  },
  {
    path : 'failure-payment',
    component : FailurePaymentComponent
  },
  {
    path : 'test',
    component : TestComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : "otp-password",
    component : OPTComponent
  },
  {
    path : "forgot-password",
    component : ForgotPasswordComponent
  },
  {
    path : "side-nav",
    component : SideNavComponent,
    children : [

      {
        path : 'preview-form',
        component : PreviewFormComponent
      },
      {
        path : "dashboard",
        component : ForgotPasswordComponent
      },
      {
        path : "forgot-password",
        component : ForgotPasswordComponent
      },
      {
        path : "application",
        component : ApplicationFormComponent
      },
      {
        path : "payment",
        component :PaymentComponent
      },
      {
        path : "view-form",
        component :ViewFormComponent
      },
    ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
