import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from 'src/app/shared/nodemailerApi/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public ContactForm :FormGroup|any

  constructor(
    private formBuilder:FormBuilder,
    private emailService:EmailService,
    private toastr: ToastrService
  ) {
    this.toastr.success('Hello world!', 'Toastr fun!');
   }

  ngOnInit(
    
  ): void {
    this.formInitialization()
  }
  public formInitialization() {
    this.ContactForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // Subject: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(500)])
    })
  }

  public SubmitContactForm() {

    let formValue = this.ContactForm.value;
    console.log(formValue);
    
    this.emailService.sendEmail(formValue).subscribe((res:any)=>{
      console.log(res.message);
      this.ContactForm.reset();
    })
}

}
