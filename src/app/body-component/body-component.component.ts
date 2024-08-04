import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.scss']
})
export class BodyComponentComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  // submitForm(form: any) {
  //   console.log("test");
  //   debugger
  //   if (form.valid) {
  //     const mailtoLink = this.constructMailtoLink();
  //     window.location.href = mailtoLink;
  //   }
  // }

  // constructMailtoLink(): string {
  //   const { name, phone, email, message } = this.formData;
  //   return `mailto:example@example.com?subject=Contact Form Submission&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`)}`;
  // }
}
