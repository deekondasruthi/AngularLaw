import { Injectable, model } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClientModule } from '@angular/common/http';
import { RegisterStudent, makePayment } from '../modal/college-model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly draftKey = 'draftData';

  saveDraft(data: any) {
    localStorage.setItem(this.draftKey, JSON.stringify(data));
  }

  retrieveDraft(): any {
    const draftData = localStorage.getItem(this.draftKey);
    return draftData ? JSON.parse(draftData) : null;
  }

  clearDraft() {
    localStorage.removeItem(this.draftKey);
  }
  constructor(private http: HttpClient, private router: Router) {}

  private readonly basePath = 'http://167.71.235.104:8075/';
  private readonly StudentRegister = 'student/register';
  private readonly Login = 'student/login';
  private readonly Applicationform = 'studentform/create';
  private readonly MakePayments = 'payment/makepayment';
  private readonly CreateOrder = 'pgmode/createorder/';
  private readonly PgInitiate = '/pgmode/initiate/';
  private readonly pgmode = 'pgmode/view';
  private readonly viewForm = 'studentform/studentforms/';
  private readonly viewFormIndividual = 'studentform/viewById/';
  private readonly ViewFormDetail = 'studentform/viewimage/';

  loginError = new Subject();

  token = localStorage.getItem('token') || null;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });
  noJsonheaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });

  options = { headers: this.headers };
  optionnojson = { headers: this.noJsonheaders };

  login(email: string, password: string) {
    const credentialBody = {
      email: email,
      password: password,
    };

    if (email == email && password == password) {
      localStorage.setItem('isloggedIn', 'true');
    } else {
      localStorage.setItem('isloggedIn', 'false');
    }
    return this.http
      .post(`${this.basePath}${this.Login}`, credentialBody, this.options)
      .subscribe((res: any) => {
        console.log('gaming', res);

        if (res.flag == 1) {

          localStorage.setItem(
            "token",
            JSON.stringify(res.response.jwtResponse.X_ACCESS_TOKEN)
          );  
          localStorage.setItem("studentId",res.response.studentId )   
          
          console.log(  localStorage.getItem('token'))
          
          
          location.href ='side-nav/application'
        } else {
          this.loginError.next(res.message);
          console.log('error' + this.loginError.next(res.message));
          console.log('error raw' + res.message);
        }
      });
  }
  // Payments 
  PGMODE() {
    return this.http.get(`${this.basePath}${this.pgmode}`, this.options);
  }

  makePayment(model: makePayment) {
    return this.http.post(
      `${this.basePath}${this.MakePayments}`,
      model,
      this.options
    );
  }

  createorders(tranid: any, payid: any) {
    return this.http.get(
      `${this.basePath}${this.CreateOrder}${tranid}/${payid}`,
      this.options
    );
  }

  pginitiate(payid: any, tranid: any) {
    return this.http.get(
      `${this.basePath}${this.PgInitiate}${payid}/${tranid}`,
      this.options
    );
  }

  



  StudentRegisters(model: RegisterStudent) {
    return this.http.post(
      `${this.basePath}${this.StudentRegister}`,
      model,
      this.options
    );
  }
  ViewForm(id:any) {
    return this.http.get(
      `${this.basePath}${this.viewForm}${id}`,
     
      this.options
    );
  }
  ViewFormIndividual(id:any,) {
    return this.http.get(
      `${this.basePath}${this.viewFormIndividual}${id}`,
     
      this.options
    );
  }
  ViewFormDetails(id:string,flag:any) {
    return this.http.get(`${this.basePath}${this.ViewFormDetail}${id}/${flag}`, {
      ...this.options,
      ...{ responseType: 'blob' },
    });
  }

  public uploadImage(formData: any) {
    return this.http.post(
      `${this.basePath}${this.Applicationform}`,
      formData,
      this.optionnojson
    );
  }


  logout() {
    localStorage.clear();
    location.href = 'login';
  }
}
