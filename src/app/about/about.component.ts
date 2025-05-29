import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
	selector: 'angly-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	/* Variables */
	services: any;
	about: any;
	contact: any;
	sendCalculationForm: UntypedFormGroup;
	calculatedValue: number = 0;

	constructor(private pageTitleService: PageTitleService, private service: ChkService, private formBuilder: UntypedFormBuilder) {

		/* Page title */
		this.pageTitleService.setTitle(" Seja um parceiro comercial");

		/* Page subTitle */
		this.pageTitleService.setSubTitle(" Ofereça parcelamento de boletos para seus clientes. ");

		this.service.getServicesAbout().
			subscribe(response => { this.services = response },
				err => console.log(err),
				() => this.services
			);

		this.service.getAbout().
			subscribe(response => { this.about = response },
				err => console.log(err),
				() => this.about
			);

		this.service.getContactContent().
			subscribe(response => { this.contact = response },
				err => console.log(err),
				() => this.contact
			);

		this.sendCalculationForm = this.formBuilder.group({
			type: ['1', []],
			value: [null, []],
		});

	}


	ngOnInit() {

	}

	sendCalculation(): void {
		const type: string = this.sendCalculationForm.controls['type'].value;

		const value: number = this.sendCalculationForm.controls['value'].value;

		if (type === '1') {

			this.calculatedValue = 0.015 * value;
		}

		if (type === '2') {

			this.calculatedValue = 0.02 * value;
		}

		if (type === '3') {

			this.calculatedValue = 0.025 * value;
		}
	}



}
