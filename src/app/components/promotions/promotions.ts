import { Component } from '@angular/core';
import { LucideArrowUpRight, LucideFlame } from '@lucide/angular';
import { PROMOTIONS } from '../../data/promotions';
import { setImageFallback } from '../../data/image-fallback';
@Component({ selector: 'app-promotions', imports: [LucideArrowUpRight, LucideFlame], templateUrl: './promotions.html' })
export class PromotionsComponent {
  readonly promotions = PROMOTIONS;
  onImageError(event: Event, name: string, wide = false): void { setImageFallback(event, name, wide ? 1600 : 800, wide ? 900 : 600); }
  whatsapp(name: string): string { return `https://wa.me/541169364551?text=${encodeURIComponent(`Hola MC Carne, quería consultar por la promo ${name}`)}`; }
}
