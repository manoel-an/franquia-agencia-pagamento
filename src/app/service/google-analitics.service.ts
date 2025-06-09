import { Injectable } from '@angular/core';

declare global {
    interface Window {
        dataLayer: any[];
    }
}

@Injectable({
    providedIn: 'root'
})
export class GoogleAnalyticsService {

    private id = 'AW-16807289575';

    public loadGTM(): void {
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${this.id}`;
        document.head.appendChild(gtagScript);

        gtagScript.onload = () => {
            window.dataLayer = window.dataLayer || [];
            this.gtag('js', new Date());
        };
    }

    public gtag(...args: any[]): void {
        window.dataLayer.push(args);
    }
}