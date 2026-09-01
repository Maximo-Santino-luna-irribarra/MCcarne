import { Component } from '@angular/core';
import { LucideArrowUpRight, LucideCamera, LucideClock3, LucideMapPin, LucideMessageCircle, LucidePhone } from '@lucide/angular';
import { BRANCHES, INSTAGRAM_URL, SALES_CHANNEL_URL } from '../../data/locations';

@Component({
  selector: 'app-footer',
  imports: [LucideArrowUpRight, LucideCamera, LucideClock3, LucideMapPin, LucideMessageCircle, LucidePhone],
  templateUrl: './footer.html'
})
export class FooterComponent {
  readonly locations = BRANCHES;
  readonly contact = BRANCHES[0];
  readonly instagramUrl = INSTAGRAM_URL;
  readonly salesChannelUrl = SALES_CHANNEL_URL;
  readonly navigation = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Productos', href: '#productos' },
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Sucursales', href: '#ubicacion' },
    { label: 'Contacto', href: '#contacto' }
  ] as const;
}
