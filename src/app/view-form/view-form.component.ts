import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { PreviewFormComponent } from '../preview-form/preview-form.component';
@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrl: './view-form.component.css',
})
export class ViewFormComponent implements OnInit {
  localstudentId: any = localStorage.getItem('localstudent');
  viewForms: any;
  @ViewChild('exampleModal') modal: ElementRef | undefined;

  constructor(private login: LoginService, public router : Router,public dialog: MatDialog) {}

  ngOnInit(): void {


    this.login.ViewForm('1').subscribe((res: any) => {
      this.viewForms = res.response;
      console.log(res.response);

    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  PreviewForm(enterAnimationDuration: string, exitAnimationDuration: string): void {



    this.router.navigateByUrl(`/side-nav/preview-form`)
    // this.dialog.open(PreviewFormComponent, {
    //   width: '900px',
    //   enterAnimationDuration,
    //   exitAnimationDuration,
    // });
  }
  application() {
    this.router.navigateByUrl(`/side-nav/application`);
  }
}
