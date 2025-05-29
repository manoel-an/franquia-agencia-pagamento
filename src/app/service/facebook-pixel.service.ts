import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FacebookPixelService {
  private loadOk: boolean = false;
  private id = '1170373777939376';

  public load() {
    if (!this.loadOk) {
      (function (
        f: any,
        b = <any>{},
        e = <any>{},
        v = <any>{},
        n = <any>{},
        t = <any>{},
        s = <any>{}
      ) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };

        if (!f._fbq) f._fbq = n;

        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      (window as any).fbq.disablePushState = true;
      (window as any).fbq('init', this.id);
      (window as any).fbq('track', 'PageView');

      this.loadOk = true;
    } else {
      (window as any).fbq('track', 'PageView');
    }
  }

  public trackCustomEvent(eventName: string, eventData: any = {}) {
    if (this.loadOk) {
      (window as any).fbq('trackCustom', eventName, eventData);
    } else {
      console.error('Facebook pixel not initialized.');
    }
  }
}