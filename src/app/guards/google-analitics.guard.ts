import { inject, Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
    CanActivate,
} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { GoogleAnalyticsService } from '../service/google-analitics.service';

@Injectable({
    providedIn: 'root',
})
export class GoogleAnalyticsGuard implements CanActivate {
    private gtm = inject(GoogleAnalyticsService);

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    canActivate(): boolean {
        if (isPlatformBrowser(this.platformId)) {
            this.gtm.loadGTM();
        }
        return true;
    }
}