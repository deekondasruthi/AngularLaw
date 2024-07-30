import { Component } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { makePayment } from '../modal/college-model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  email: any = localStorage.getItem('email');
  mobileNumber: any = localStorage.getItem('mobilenumber');
  Name: any = localStorage.getItem('name');
  addressLine1: any = localStorage.getItem('address');
  city: any = localStorage.getItem('city');
  state: any = localStorage.getItem('state');
  countrys: any ="IND"
  pincode: any = localStorage.getItem('pincode');
  getpayids: any;
  amount: any;
  getsecurehash: any;
  vieworder: any;
  localId: any = localStorage.getItem('id');
  localName: any = localStorage.getItem('name');
  apikey: any;
  getdata: any;
  pgmoder: any;
  storeorderreference: any;
  refferencenumber: any;
  hash: any;
  TotlPay: any | undefined;
  alloverPay: any;
  gstvalue: any;
  constructor(private Login: LoginService) { }

  calculatePercentage(amount: number): number {
    const percentage = 18;
    return (percentage / 100) * amount;
  }
  ngOnInit(): void {

    const amount = this.amount // Example amount
const calculatedPercentage = this.calculatePercentage(amount);
console.log(calculatedPercentage); 

    console.log(this.email);
    console.log(this.mobileNumber);
    console.log(this.city);
    console.log(this.state);
    console.log(this.countrys);
    console.log(this.pincode);
    console.log(this.addressLine1);
    console.log(this.Name);
    console.log(this.apikey);
    
    this.Login.PGMODE().subscribe((res: any) => {
      this.pgmoder = res.data;
      

      console.log(JSON.stringify(res.data) + ' drta');

      for (let getdata of this.pgmoder) {
        console.log('tell' + getdata);
        if (getdata.pgOnoffStatus == 1) console.log(getdata.id);
        this.getpayids = getdata.id;
        this.apikey = getdata.apikey;
      }
    });
  }

  total()
  {
     // Example amount
    const calculatedPercentage: number = this.calculatePercentage(this.amount);
    console.log(calculatedPercentage); 
    console.log(this.amount);

    this.gstvalue=calculatedPercentage

    const amountNumber: number = parseFloat(this.amount);    

    this.TotlPay= calculatedPercentage + amountNumber


  }

  pay() {
    let submitModel: makePayment = {
      studentCourseId: this.localId,
      studentId: this.TotlPay,
      amount: this.TotlPay,
      createdBy: this.localName,
    };

    this.Login.makePayment(submitModel).subscribe((res: any) => {
      this.getdata = res.data;
      console.log('data' + this.getdata);
      if (res.flag == 1) {
        this.Login.createorders(this.getdata, this.getpayids).subscribe(
          (res: any) => {
            this.vieworder = res.data;
            this.refferencenumber = res.data.orderReference;
            console.log('refferencenumber'+this.refferencenumber);
            
            if (res.flag == 1) {
              this.Login.pginitiate(this.getdata, this.getpayids).subscribe(
                (res: any) => {
                  this.hash = res.data;
                  console.log('trytfyt' + this.hash);
                  if (res.flag == 0) {
                    onload =   function () {
                      document
                        .createElement('form')
                        .submit.call(document.getElementById('FormType'));
                    };

                    const myTimeout = setTimeout(onload, 500);
                  }
                }
              );
            }
          }
        );
      }
    });
  }
}


