import { Component, HostListener, signal } from '@angular/core';
import { LucideCamera, LucideX, LucideZoomIn } from '@lucide/angular';
import { setImageFallback } from '../../data/image-fallback';
@Component({ selector: 'app-gallery', imports: [LucideCamera, LucideX, LucideZoomIn], templateUrl: './gallery.html' })
export class GalleryComponent {
  readonly selectedImage = signal<number | null>(null);
  readonly images = [
    { src: 'image/carnes/carne1.png', alt: 'Detrás del mostrador 1', vertical: true },
    { src: 'image/carnes/image.png', alt: 'Detrás del mostrador 2', vertical: false },
    { src: 'image/carnes/WhatsApp%20Image%202026-08-31%20at%2012.56.02.jpeg', alt: 'Detrás del mostrador 3', vertical: false },
    { src: 'image/carniceria/image.png', alt: 'Detrás del mostrador 4', vertical: true },
    { src: 'image/fondos/image.png', alt: 'Detrás del mostrador 5', vertical: false },
    { src: 'image/carnes/image.png', alt: 'Detrás del mostrador 6', vertical: false },
    { src: 'image/carnes/carne1.png', alt: 'Detrás del mostrador 7', vertical: true },
    { src: 'image/logos/logo.svg?v=2', alt: 'Detrás del mostrador 8', vertical: false }
  ] as const;
  open(index: number): void { this.selectedImage.set(index); document.body.classList.add('overflow-hidden'); }
  close(): void { this.selectedImage.set(null); document.body.classList.remove('overflow-hidden'); }
  @HostListener('document:keydown.escape') onEscape(): void { if (this.selectedImage() !== null) this.close(); }
  onImageError(event: Event, index: number, vertical: boolean): void { setImageFallback(event, `galería 0${index + 1}`, vertical ? 700 : 900, vertical ? 1000 : 700); }
}
