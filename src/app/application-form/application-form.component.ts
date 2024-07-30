import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import SignaturePad from 'signature_pad';
import { LoginService } from '../Services/login.service';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import Swal from 'sweetalert2'
class ImageSnippet {
  pending: boolean = false;
  status: string = "init";

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css',
})
export class ApplicationFormComponent implements OnInit {

  uploadedFiles: any[] = [];
  value: any;
  values: any;
    firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  date: Date[] | undefined;
  captchaResponse: string = '';

  myForm: any = FormGroup;
    tenthMarkSheets: any = ImageSnippet;
  twelthMarkSheets: any = ImageSnippet;
  Gradations: any = ImageSnippet;
  TransferCertificates: any = ImageSnippet;
  CommunityCertificates: any = ImageSnippet;
  Reservations: any = ImageSnippet;
  ProfilePictures: any = ImageSnippet;
  FormResponse: any;
  obtained: any  = 0
  student: any  = 0

  constructor(private formBuilder: FormBuilder,private login :LoginService) {


    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      mobile: ['', Validators.required],
      StudentOccupation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateofBirth: ['', [Validators.required]],
      category: ['', [Validators.required]],
      BPL: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      Nationality: ['', [Validators.required]],
      Course: ['', [Validators.required]],
      Religion: ['', [Validators.required]],


      TenthpassedoutYear: ['', [Validators.required]],
      TenthSchoolName: ['', [Validators.required]],
      TenthMaxMark: ['', [Validators.required]],
      TenthBoard: ['', [Validators.required]],
      TenthObtainedMark: ['', [Validators.required]],
      TenthPercentage : ['', [Validators.required]],


      twelthpassedoutYear: ['', [Validators.required]],
      twelthSchoolName: ['', [Validators.required]],
      twelthMaxMark: ['', [Validators.required]],
      twelthBoard: ['', [Validators.required]],
      twelthObtainedMark: ['', [Validators.required]],
      twelthPercentage : ['', [Validators.required]],

      collegepassedoutYear: ['', [Validators.required]],
      collegeSchoolName: ['', [Validators.required]],
      collegeMaxMark: ['', [Validators.required]],
      collegeBoard: ['', [Validators.required]],
      collegePercentage : ['', [Validators.required]],

      motherName : ['', [Validators.required]],
      motherOccupation : ['', [Validators.required]],
      motherAnnualIncome : ['', [Validators.required]],
      motherOfficeAddress : ['', [Validators.required]],
      motherPhoneNumber : ['', [Validators.required]],

      fatherName : ['', [Validators.required]],
      fatherOccupation : ['', [Validators.required]],
      fatherAnnualIncome : ['', [Validators.required]],
      fatherOfficeAddress : ['', [Validators.required]],
      fatherPhoneNumber : ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

    
    const draftData = this.login.retrieveDraft();
    if (draftData) {
      this.myForm.patchValue(draftData);
    }
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    return this.myForm.get('category').value;
  }
  submitForm() {
    // Send this.captchaResponse to your server for validation
    console.log('CAPTCHA Response:', this.captchaResponse);
  }


  saveDraft() {
  
      this.login.saveDraft(this.myForm.value);
      console.log(this.login.saveDraft(this.myForm.value));
      
    
  }

  clearDraft() {
    this.login.clearDraft();
    this.myForm.reset();
  }


  getSelectedRadioValue() {
    return this.myForm.get('category').value;
    console.log(this.myForm.get('category').value);
  }

  tenthMarkSheet(tenthMarkSheet: any) {
    const file: File = tenthMarkSheet.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.tenthMarkSheets = new ImageSnippet(event.target.result, file);

      this.tenthMarkSheets.pending = true;
    });

    reader.readAsDataURL(file);
  }
  twelthMarkSheet(twelthMarkSheet: any) {
    const file: File = twelthMarkSheet.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.twelthMarkSheets = new ImageSnippet(event.target.result, file);

      this.twelthMarkSheets.pending = true;
    });

    reader.readAsDataURL(file);
  }
  Gradation(Gradation: any) {
    const file: File = Gradation.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.Gradations = new ImageSnippet(event.target.result, file);

      this.Gradations.pending = true;
    });

    reader.readAsDataURL(file);
  }
  TransferCertificate(TransferCertificate: any) {
    const file: File = TransferCertificate.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.TransferCertificates = new ImageSnippet(event.target.result, file);

      this.TransferCertificates.pending = true;
    });

    reader.readAsDataURL(file);
  }
  CommunityCertificate(CommunityCertificate: any) {
    const file: File = CommunityCertificate.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.CommunityCertificates = new ImageSnippet(event.target.result, file);

      this.CommunityCertificates.pending = true;
    });

    reader.readAsDataURL(file);
  }
  Reservation(Reservation: any) {
    const file: File = Reservation.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.Reservations = new ImageSnippet(event.target.result, file);

      this.Reservations.pending = true;
    });

    reader.readAsDataURL(file);
  }
  ProfilePicture(ProfilePicture: any) {
    const file: File = ProfilePicture.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.ProfilePictures = new ImageSnippet(event.target.result, file);

      this.ProfilePictures.pending = true;
    });

    reader.readAsDataURL(file);
  }



  submit()
  {
    const formData = new FormData();

    formData.append("studentId", this.student );
    formData.append("name", this.myForm.value.firstName);
    formData.append("email", this.myForm.value.email);
    formData.append("mobileNumber", this.myForm.value.mobile);
    formData.append("dateOfBirth", this.myForm.value.dateofBirth);
    formData.append("gender", this.myForm.value.gender);
    formData.append("fatherName", this.myForm.value.fatherName);
    formData.append("religion", this.myForm.value.Religion);
    formData.append("nationality", this.myForm.value.Nationality);
    formData.append("communityCategory", this.myForm.value.category);
    formData.append("bplCategory", this.myForm.value.BPL);
    formData.append("courseName", this.myForm.value.Course);
    formData.append("address", this.myForm.value.address);
    formData.append("state", this.myForm.value.state);
    formData.append("city", this.myForm.value.city);
    formData.append("pincode", this.myForm.value.pincode);
    formData.append("occupation", this.myForm.value.StudentOccupation);
    formData.append("xPassedOut", this.myForm.value.TenthpassedoutYear);
    formData.append("xIIPassedOut", this.myForm.value.twelthpassedoutYear);
    formData.append("graduationPassedOut", this.myForm.value.collegepassedoutYear);
    formData.append("xSchoolName", this.myForm.value.TenthSchoolName);
    formData.append("xIISchooleName", this.myForm.value.twelthSchoolName);
    formData.append("graduationCollegeName", this.myForm.value.collegeSchoolName);
    formData.append("xBoard", this.myForm.value. TenthBoard);
    formData.append("xIIBoard ", this.myForm.value.twelthBoard);
    formData.append("graduationBoard ", this.myForm.value.collegeBoard);
    formData.append("xMaxMark ", this.myForm.value.TenthMaxMark);
    formData.append("xIIMaxMark ", this.myForm.value.twelthMaxMark);

    formData.append("graduationMaxMark ", this.myForm.value.collegeMaxMark);
    formData.append("xObtainedMark", this.myForm.value.TenthObtainedMark);
    formData.append("xIIObtainedMark", this.myForm.value.twelthObtainedMark);
    formData.append("graduationObtainedMark",  this.obtained);
    formData.append("xPercentageMark", this.myForm.value.TenthPercentage);
    
    formData.append("xIIPercentageMark", this.myForm.value.twelthPercentage);
    formData.append("graduationPercentageMark", this.myForm.value.collegePercentage);

    formData.append("motherName", this.myForm.value.motherName);
    formData.append("motherOccupation", this.myForm.value.motherOccupation);
    formData.append("fatherOccupation", this.myForm.value.fatherOccupation);

    formData.append("motherAnnualIncome", this.myForm.value.twelthMaxMark);
    formData.append("fatherAnnualIncome", this.myForm.value.motherAnnualIncome);

    formData.append("fatherOfficeAddress ", this.myForm.value.fatherOfficeAddress);
    formData.append("motherOfficeAddress  ", this.myForm.value.motherOfficeAddress);

    formData.append("motherMobileNo", this.myForm.value.fatherPhoneNumber);
    formData.append("fatherMobileNo", this.myForm.value.motherPhoneNumber);

    formData.append("profilePic", this.ProfilePictures.file);
    formData.append("xMarkSheet", this.tenthMarkSheets.file);
    formData.append("xIIMarkSheet", this.twelthMarkSheets.file);
    formData.append("graduationMarkSheet", this.Gradations.file);
    formData.append("transferCertificate", this.TransferCertificates.file);
    formData.append("communityCertificate", this.CommunityCertificates.file);
    formData.append("specialDoc", this.Reservations.file);



    
    console.log(this.tenthMarkSheets.file);
    this.login.uploadImage(formData).subscribe((res: any) => {
      console.log("im caption");

      this.FormResponse = res.response;
      if (res.response.flag == 1) {

        Swal.fire({
          imageUrl: "src",
          imageHeight: 1500,
          imageAlt: "A tall image"
        });
        // this.toastr.success(res.message);
        window.location.reload();
      } else {
        // this.toastr.error(res.message);
      }
    });
  }


}
