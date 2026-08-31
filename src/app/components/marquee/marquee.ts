import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  template: `
    <div class="marquee overflow-hidden bg-mc-red py-4 text-white" aria-label="MC Carne, cortes frescos y buena carne">
      <div class="marquee-track font-display text-2xl uppercase tracking-wider">
        <span class="marquee-group">{{ text }}</span>
        <span class="marquee-group" aria-hidden="true">{{ text }}</span>
      </div>
    </div>
  `
})
export class MarqueeComponent {
  readonly text = 'MC CARNE ★ FRESH CUTS ★ BUENA CARNE ★ QUALITY MEAT ★ MC CARNE ★ FRESH CUTS ★ BUENA CARNE ★ QUALITY MEAT ★ ';
}
