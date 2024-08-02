import {Injector, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OPTComponent } from './opt/opt.component';
import { InputOtpModule } from 'primeng/inputotp';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestComponent } from './test/test.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashobardComponent } from './dashobard/dashobard.component';
export let AppInjector: Injector;
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ApplicationFormComponent } from './application-form/application-form.component'
import { StepperModule } from 'primeng/stepper';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { FailurePaymentComponent } from './failure-payment/failure-payment.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { SignaturePadModule } from 'angular2-signaturepad';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import {MatStepperModule} from '@angular/material/stepper';
import { PaymentComponent } from './payment/payment.component';
import {MatCardModule} from '@angular/material/card';
import { ViewFormComponent } from './view-form/view-form.component';
import { TimelineModule } from 'primeng/timeline';
import { PreviewFormComponent } from './preview-form/preview-form.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AccordionModule } from 'primeng/accordion';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { GalleriaModule } from 'primeng/galleria';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    OPTComponent,
    MainloginComponent,
    TestComponent,
    SideNavComponent,
    DashobardComponent,
    ApplicationFormComponent,
    SuccessPaymentComponent,
    FailurePaymentComponent,
    DialogComponent,
    PaymentComponent,
    ViewFormComponent,
    PreviewFormComponent,
  ],
  imports: [
    GalleriaModule,
    OverlayPanelModule,
    AccordionModule,
    SplitButtonModule,
    ToolbarModule,
    MatDialogModule,
    TimelineModule,
    MatCardModule,
    MatStepperModule,
    ToastModule,
    FileUploadModule,
    FieldsetModule,
    SignaturePadModule ,
    CardModule,
    StepsModule,
    SignaturePadModule,
    // DialogModule, 
    CalendarModule,
    FloatLabelModule,
    InputIconModule,
    IconFieldModule,
    StepperModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatProgressSpinnerModule,

        NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    InputOtpModule,
    ButtonModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
 }
