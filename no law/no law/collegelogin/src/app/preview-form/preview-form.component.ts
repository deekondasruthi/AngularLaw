import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrl: './preview-form.component.css'
})
export class PreviewFormComponent  implements OnInit {
  viewForms: any;
  imageUrl: any;
  imageUrlforxthsheet: any;
  imageUrlforXllthsheet: any;
  imageUrlforgraduation: any;
  imageUrlforTC: any;
  imageUrlforCommunityCertificate: any;
  imageUrlforReservation: any;
  constructor(private formBuilder: FormBuilder,private login: LoginService, public router : Router,public dialog: MatDialog ) {}
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  

  items: MenuItem[] | undefined;

  activeIndex: any | undefined = 0;

  activeIndexChange(index : any){
      this.activeIndex = index
  }

  
  ngOnInit(): void {


    this.login.ViewFormDetails('1','1').subscribe((data)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string);
        this.imageUrl = reader.result as string;

        console.log(this.imageUrlforxthsheet)
      
      };

    })


    this.login.ViewFormDetails('1','2').subscribe((data)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string);
        this.imageUrlforxthsheet = reader.result as string;

        console.log(this.imageUrlforxthsheet)
      
      };

    })
    this.login.ViewFormDetails('1','3').subscribe((data)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string);
        this.imageUrlforXllthsheet = reader.result as string;

        console.log(this.imageUrlforXllthsheet)
      
      };

    })
    this.login.ViewFormDetails('1','3').subscribe((data)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string);
        this.imageUrlforXllthsheet = reader.result as string;

        console.log(this.imageUrlforXllthsheet)
      
      };

    })
    this.login.ViewFormDetails('1','4').subscribe((data)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string);
        this.imageUrlforgraduation= reader.result as string;

        console.log(this.imageUrlforgraduation)
      
      };

    })
    this.login.ViewFormDetails('1','5').subscribe((data)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string);
        this.imageUrlforTC= reader.result as string;

        console.log(this.imageUrlforTC)
      
      };

    })
    this.login.ViewFormDetails('1','6').subscribe((data)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string);
        this.imageUrlforCommunityCertificate= reader.result as string;

        console.log(this.imageUrlforTC)
      
      };

    })
    
    this.login.ViewFormDetails('1','7').subscribe((data)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string);
        this.imageUrlforReservation= reader.result as string;

        console.log(this.imageUrlforTC)
      
      };

    })
    
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      }
  ];




    this.login.ViewFormIndividual('1').subscribe((res: any) => {
      this.viewForms = res.response;
      console.log(res.response);

    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
 

  
}

