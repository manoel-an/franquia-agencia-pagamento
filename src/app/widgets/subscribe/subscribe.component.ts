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

   labelButton: string = 'Entrar no grupo';

   /* Form name */
   subscribe: UntypedFormGroup;
   emailPattern: any = /\S+@\S+\.\S+/;

   constructor(private formBuilder: UntypedFormBuilder) {
      this.subscribe = this.formBuilder.group({
         type: ['1', []],
         mobile: [null, [Validators.required, Validators.pattern('^(\\+?\d{1,5}[\s-])?(?!0+\s+,?$)\\d{11}\s*,?$')]],
         email: [null, []]
      });
   }

   ngOnInit() {


   }

   subscribeNow() {

      if (this.subscribe.controls['type'].value === '1' && this.subscribe.controls['mobile'].valid) {

         this.subscribe.disable();

         let telefone = this.subscribe.controls['mobile'].value;

         this.assinarInformativo(telefone);

         window.open("https://chat.whatsapp.com/IXWUYzBKlGOAZHq2jZSzSn", '_blank');

      } else if (this.subscribe.controls['type'].value === '2' && this.subscribe.controls['email'].valid) {

         this.subscribe.disable();

         let email = this.subscribe.controls['email'].value;

         this.assinarInformativo(email);

      } else {

         if (this.subscribe.controls['type'].value === '1' && !this.subscribe.controls['mobile'].touched) {
            this.subscribe.controls['mobile'].markAsTouched();
         }

         if (this.subscribe.controls['type'].value === '2' && !this.subscribe.controls['email'].touched) {
            this.subscribe.controls['email'].markAsTouched();
         }

      }
   }

   alterarCanal() {

      if (this.subscribe.controls['type'].value === '1') {

         this.subscribe.controls['email'].addValidators([]);

         this.subscribe.controls['mobile'].addValidators([Validators.required, Validators.pattern('^(\\+?\d{1,5}[\s-])?(?!0+\s+,?$)\\d{11}\s*,?$')]);

         this.subscribe.controls['mobile'].setValue("");

         this.subscribe.controls['email'].markAsUntouched();

         this.labelButton = 'Entrar no grupo';

      } else {

         this.subscribe.controls['mobile'].addValidators([]);

         this.subscribe.controls['email'].addValidators([Validators.required, Validators.pattern(this.emailPattern)]);

         this.subscribe.controls['email'].setValue("");

         this.subscribe.controls['mobile'].markAsUntouched();

         this.labelButton = 'Inscrever-se';
      }

   }

   private async assinarInformativo(contact: string) {

      emailjs.init('4kNPEyLe10GOsPAfr');

      let response = await emailjs.send("service_fesg0xj", "template_nj101jf", {
         from_name: "APP",
         to_name: "Manoel",
         from_email: contact,
         subject: "Contato informativo",
         message: "Novo informativo"
      });

      if (response) {

         this.sendEmail = true;

         this.subscribe.controls['type'].value === '1' ? this.subscribe.controls['mobile'].setValue("") : this.subscribe.controls['email'].setValue("");

         setTimeout(() => {

            this.sendEmail = false;

            this.subscribe.enable();

         }, 3000);
      }
   }
}
