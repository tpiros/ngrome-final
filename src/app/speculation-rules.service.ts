import {
  Inject,
  Injectable,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SpeculationRulesService {
  private renderer: Renderer2;
  private isBrowser: boolean;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(platformId);
  }

  addSpeculationRules(): void {
    if (!this.isBrowser) {
      return;
    }
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'id', 'speculationrules');
    this.renderer.setAttribute(script, 'type', 'speculationrules');

    const rules = `
      {
        "prerender": [
          {
            "source": "document",
            "where": {
              "and": [{ "href_matches": "wizard/*" }]
            },
            "eagerness": "moderate"
          }
        ]
      }
    `;

    this.renderer.appendChild(script, this.renderer.createText(rules));

    this.renderer.appendChild(document.head, script);
  }
}
