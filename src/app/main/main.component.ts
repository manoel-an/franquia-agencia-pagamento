import { Component, OnInit, HostListener } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
	selector: 'angly-layout',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	isHome: boolean = true;
	isBlog: boolean = false;
	isCommon: boolean = false;
	fixedHeaderClass: boolean = false;

	/* Variables */
	headerTitle: string = "";
	headerSubTitle: string = "";
	featuredPost: any;

	constructor(private pageTitleService: PageTitleService, private service: ChkService, public router: Router) {

		/* page title.*/
		this.pageTitleService.title.subscribe((val: string) => {
			this.headerTitle = val;
		});

		/* page subTitle. */
		this.pageTitleService.subTitle.subscribe((val: string) => {
			this.headerSubTitle = val;
		});
	}

	ngOnInit() { }

	@HostListener('scroll', ['$event'])
	onScroll(event: any) {
		if (event.path && (event.path[0].scrollTop > 0)) {
			this.fixedHeaderClass = true;
		} else {
			this.fixedHeaderClass = false;
		}
	}

	onActivate(e: any, scrollContainer: any) {
		scrollContainer.scrollTop = 0;
		window.scroll(0, 0);
	}

	addToggleClass() {
		$('body').toggleClass('rtl-enable');
		var selectorNvaBarMenu = '.navbar-menu'
		var leftNavBarMenu = $(selectorNvaBarMenu).offset().left;
		if (leftNavBarMenu) {
			$(selectorNvaBarMenu).css("left", "");
		} else {
			$(selectorNvaBarMenu).css("right", "0");
		}
	}

}
