import { Component } from '@angular/core';
import { LucideArrowUpRight, LucideMessageCircle } from '@lucide/angular';
import { PRODUCTS } from '../../data/products';
import { setImageFallback } from '../../data/image-fallback';
@Component({ selector: 'app-products', imports: [LucideArrowUpRight, LucideMessageCircle], templateUrl: './products.html' })
export class ProductsComponent {
  readonly products = PRODUCTS;
  readonly categories = [
    { name: 'Carne vacuna', note: 'Selección de la casa', number: '01', area: 'category-featured' }, { name: 'Cerdo', note: 'Sabor y versatilidad', number: '02', area: '' },
    { name: 'Pollo', note: 'Fresco todos los días', number: '03', area: '' }, { name: 'Achuras', note: 'El ritual completo', number: '04', area: '' },
    { name: 'Embutidos', note: 'Parrilla con carácter', number: '05', area: '' }, { name: 'Preparados', note: 'Soluciones ricas', number: '06', area: '' }
  ] as const;
  onImageError(event: Event, name: string): void { setImageFallback(event, name, 800, 600); }
  whatsapp(name: string): string { return `https://wa.me/541169364551?text=${encodeURIComponent(`Hola MC Carne, quería consultar por ${name}`)}`; }
}
