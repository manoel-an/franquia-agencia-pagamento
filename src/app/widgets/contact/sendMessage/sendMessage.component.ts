/*
 * Send message
 * Used in another component.
 */
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: '[angly-sendMessage]',
  templateUrl: './sendMessage.component.html',
  styleUrls: ['./sendMessage.component.scss']
})
export class SendMessageComponent implements OnInit {

  sendMessageForm: UntypedFormGroup;

  emailPattern: any = /\S+@\S+\.\S+/;

  constructor(private formBuilder: UntypedFormBuilder) {

    this.sendMessageForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(this.emailPattern)]],
      textArea: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  /*
   * sendMessage
   */
  async sendMessage() {

    emailjs.init('4kNPEyLe10GOsPAfr');

    if (this.sendMessageForm.valid) {

      let response = await emailjs.send("service_fesg0xj", "template_nj101jf", {
        from_name: `${this.sendMessageForm.controls['firstName'].value} ${this.sendMessageForm.controls['lastName'].value}`,
        to_name: "Manoel",
        from_email: this.sendMessageForm.controls['email'].value,
        subject: "Contato Franquia Agência de Pagamento",
        message: this.sendMessageForm.controls['textArea'].value
      });

      if (response) {

        alert("Mensagem enviada com sucesso");

        this.sendMessageForm.reset();

      }

    } else {

      this.marcarToqueCampos();

    }
  }

  private marcarToqueCampos() {
    if (!this.sendMessageForm.controls['firstName'].touched) {
      this.sendMessageForm.controls['firstName'].markAsTouched();
    }

    if (!this.sendMessageForm.controls['lastName'].touched) {
      this.sendMessageForm.controls['lastName'].markAsTouched();
    }

    if (!this.sendMessageForm.controls['email'].touched) {
      this.sendMessageForm.controls['email'].markAsTouched();
    }

    if (!this.sendMessageForm.controls['textArea'].touched) {
      this.sendMessageForm.controls['textArea'].markAsTouched();
    }

  }

}
