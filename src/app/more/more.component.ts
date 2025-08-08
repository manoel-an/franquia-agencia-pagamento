import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import * as moment from 'moment';
import { ChkService } from '../service/chk.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'angly-more',
    templateUrl: './more.component.html',
    styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit, OnDestroy {

    loadScreen = false;

    finishScreen = false;

    firstName: string;

    lastName: string;

    celphone: string;

    email: string;

    id: any;

    @ViewChild('videoPlayer') videoplayer: ElementRef;

    constructor(private pageTitleService: PageTitleService, private route: ActivatedRoute, private viewportScroller: ViewportScroller, private router: Router, private service: ChkService) {

        /* Page title */
        this.pageTitleService.setTitle(" Agência de Pagamento ");

        /* Page subTitle */
        this.pageTitleService.setSubTitle(" Apresentação franquia de pagamento. ");

    }

    ngOnInit() {

        this.inicializarParametros();

    }

    ngOnDestroy() {

        this.pageTitleService.setTitle('');
        this.pageTitleService.setSubTitle('');
    }

    carregarVideo() {

        this.loadScreen = true;

        setTimeout(() => {
            this.videoplayer.nativeElement.play();

        }, 1000);


    }

    apresentarOpcoesSelecao() {

        this.finishScreen = true;

        const scrollHeight = document.body.scrollHeight;

        this.viewportScroller.scrollToPosition([0, scrollHeight * 0.4]);
    }

    redirecionarLead(qualified: boolean) {

        this.service.adicionarLead({ data_registratation: moment(new Date()).format("DD/MM/YYYY HH:mm:ss"), first_name: this.firstName, last_name: this.lastName, celphone: this.celphone, email: this.email, accept_meeting: true, payment: false }).
            subscribe(response => { this.id = response },
                err => console.log(err),
                () => {
                    console.log(`Lead ${this.id} enviado com sucesso.`)
                    if (qualified) {

                        this.enviarLeadQualificado();

                        this.router.navigateByUrl('/qualified');

                    } else {

                        this.router.navigateByUrl('/obrigado');
                    }
                }
            );

    }

    private inicializarParametros() {
        this.route.queryParams.subscribe(params => {
            this.firstName = params["first_name"];
            this.lastName = params["last_name"];
            this.celphone = params["celphone"];
            this.email = params["email"];
        });
    }

    private async enviarLeadQualificado() {

        emailjs.init('4kNPEyLe10GOsPAfr');

        let response = await emailjs.send("service_fesg0xj", "template_nj101jf", {
            from_name: "APP",
            to_name: "Manoel",
            from_email: this.email,
            subject: "Lead Qualificado",
            message: `Nome: ${this.firstName} ${this.lastName} whatsapp: ${this.celphone}`
        });

        if (response) {
            console.log("Email enviado com sucesso");
        }
    }
}
