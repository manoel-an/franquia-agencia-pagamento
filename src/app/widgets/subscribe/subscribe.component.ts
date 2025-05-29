import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
   selector: '[angly-subscribe]',
   templateUrl: './subscribe.component.html',
   styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

   @Input() subscribeFormClasses: any;

   sendEmail: boolean = false;

   /* Form name */
   subscribe: UntypedFormGroup;
   emailPattern: any = /\S+@\S+\.\S+/;

   constructor(private formBuilder: UntypedFormBuilder) {
      this.subscribe = this.formBuilder.group({
         email: [null, [Validators.required, Validators.pattern(this.emailPattern)]]
      });
   }

   ngOnInit() {
   }

   subscribeNow() {

      if (this.subscribe.valid) {

         let email = this.subscribe.controls['email'].value;

         this.assinarBoletim(email);

      } else {

         console.log("Error!");

      }
   }


   private async assinarBoletim(email: string) {

      emailjs.init('4kNPEyLe10GOsPAfr');

      let response = await emailjs.send("service_fesg0xj", "template_nj101jf", {
         from_name: "APP",
         to_name: "Manoel",
         from_email: email,
         subject: "Email Boletim",
         message: "Novo boletim"
      });

      if (response) {

         this.sendEmail = true;

         this.subscribe.reset();

         setTimeout(() => {
            this.sendEmail = false;
         }, 5000);
      }
   }
}
