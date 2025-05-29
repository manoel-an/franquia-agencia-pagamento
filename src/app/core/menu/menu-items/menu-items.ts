import { Injectable } from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
	state: string;
	name?: string;
	type?: string;
	icon?: string;
	children?: ChildrenItems[];
}

/*
 * Children menu interface
 */
export interface ChildrenItems {
	state: string;
	name: string;
	type?: string;
}

const HEADERMENUITEMS = [
	{
		state: "home",
		name: "Início",
		type:"link"
	},
	{
		state:"",
		name:"Paginas",
		type:"sub",
		icon: 'fa fa-caret-down',
		children: [
			{ state: 'home', name: 'Início', type:"link"},
			{ state: 'parceiro-comercial', name: 'Parceiro Comercial', type:"link"},
			{ state: 'parcele-seu-boleto', name: 'Parcele seu Boleto', type:"link"},
			{ state: 'seja-um-franqueado', name: 'Seja um Franqueado', type:"link"},
			{ state: 'saiba-mais', name: 'Saiba Mais', type:"link"},
			{ state: 'casos-sucesso', name: 'Casos de Sucesso', type:"link"}
		]
	}
	];

const FOOTERMENU = [
	{
		state: "home",
		name: "Home",
		type:"link"
	},
	{
		state:"features",
		name:"Features",
		type:"link"
	},
	{
		state:"seja-um-franqueado",
		name:"Seja um Franqueado",
		type:"link"
	},
	{
		state:"team",
		name:"Team",
		type:"link"
	},
	{
		state:"about",
		name:"About",
		type:"link"
	}
]

const EXPLOREMENU = [
	{
		state: "home",
		name: "Dashboard",
		type:"link"
	},
	{
		state: "sign-in",
		name: "Sign In",
		type:"link"
	},
	{
		state: "sign-up",
		name: "Sign Up",
		type:"link"
	},
	{
		state: "helpdesk",
		name: "Helpdesk",
		type:"link"
	},
	{
		state: "privacy-policy",
		name: "Privacy Policy",
		type:"link"
	},
	{
		state: "terms-conditions",
		name: "Terms & Conditions ",
		type:"link"
	}
];

const FOOTERMENU2 = [
	{
		state: "home",
		name: "Home",
		type:"link"
	},
	{
		state:"parceiro-comercial",
		name:"Parceiro Comercial",
		type:"link"
	},
	{
		state:"seja-um-franqueado",
		name:"Seja um Franqueado",
		type:"link"
	},
	{
		state:"parcele-seu-boleto",
		name:"Parcele seu Boleto",
		type:"link"
	},
	{
		state:"casos-sucesso",
		name:"Casos de Sucesso",
		type:"link"
	}
];

@Injectable()
export class MenuItems {

	/*
	 * Get all header menu
	 */
	getMainMenu(): Menu[] {
		return HEADERMENUITEMS;
	}

	/*
	 * Get footer menu
	 */
	getFooterMenu(): Menu[] {
		return FOOTERMENU;
	}

	/*
	 * Get the explore menu
	 */
	getExploreMenu(): Menu[] {
		return EXPLOREMENU;
	}

	/*
	 * Get the footer2
	 */
	getFooter2(): Menu[] {
		return FOOTERMENU2;
	}

}
