import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ChkService } from '../service/chk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'angly-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  sendLeadForm: UntypedFormGroup;

  emailPattern: any = /\S+@\S+\.\S+/;

  id: any;

  constructor(private pageTitleService: PageTitleService, private router: Router, private formBuilder: UntypedFormBuilder, private service: ChkService) {

    /* Page title */
    this.pageTitleService.setTitle(" Seja um franqueado ");

    /* Page subTitle */
    this.pageTitleService.setSubTitle(" Ganhe pagando boletos. ");


    this.sendLeadForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.pattern('^(\\+?\d{1,5}[\s-])?(?!0+\s+,?$)\\d{11}\s*,?$')]],
      email: [null, [Validators.required, Validators.pattern(this.emailPattern)]],
      checkMeeting: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  /*
   * sendLeadForm
   */
  sendLead() {
    if (this.sendLeadForm.valid) {

      this.router.navigate(['/qualidade-franqueado'], { queryParams: { first_name: this.sendLeadForm.get("firstName")?.value, last_name: this.sendLeadForm.get("lastName")?.value, celphone: this.sendLeadForm.get("mobile")?.value, email: this.sendLeadForm.get("email")?.value } });

    } else {

      this.marcarToqueCampos();
    }
  }


  private marcarToqueCampos() {
    if (!this.sendLeadForm.controls['firstName'].touched) {
      this.sendLeadForm.controls['firstName'].markAsTouched();
    }
    if (!this.sendLeadForm.controls['lastName'].touched) {
      this.sendLeadForm.controls['lastName'].markAsTouched();
    }
    if (!this.sendLeadForm.controls['mobile'].touched) {
      this.sendLeadForm.controls['mobile'].markAsTouched();
    }
    if (!this.sendLeadForm.controls['email'].touched) {
      this.sendLeadForm.controls['email'].markAsTouched();
    }
    if (!this.sendLeadForm.controls['checkMeeting'].touched) {
      this.sendLeadForm.controls['checkMeeting'].markAsTouched();
    }
  }
}
