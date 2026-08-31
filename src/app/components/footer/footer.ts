import { Component } from '@angular/core';
import { LucideArrowUpRight, LucideCamera, LucideMapPin, LucideMessageCircle } from '@lucide/angular';
import { INSTAGRAM_URL, LOCATIONS, SALES_CHANNEL_URL } from '../../data/locations';

@Component({
  selector: 'app-footer',
  imports: [LucideArrowUpRight, LucideCamera, LucideMapPin, LucideMessageCircle],
  templateUrl: './footer.html'
})
export class FooterComponent {
  readonly locations = LOCATIONS;
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
