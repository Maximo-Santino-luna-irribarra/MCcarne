import { Component, HostListener, signal } from '@angular/core';
import { LucideCamera, LucideX, LucideZoomIn } from '@lucide/angular';
import { setImageFallback } from '../../data/image-fallback';
@Component({ selector: 'app-gallery', imports: [LucideCamera, LucideX, LucideZoomIn], templateUrl: './gallery.html' })
export class GalleryComponent {
  readonly selectedImage = signal<number | null>(null);
  readonly images = Array.from({ length: 8 }, (_, index) => ({ src: `assets/images/gallery/gallery-${String(index + 1).padStart(2, '0')}.webp`, alt: `Detrás del mostrador ${index + 1}`, vertical: [0, 3, 6].includes(index) }));
  open(index: number): void { this.selectedImage.set(index); document.body.classList.add('overflow-hidden'); }
  close(): void { this.selectedImage.set(null); document.body.classList.remove('overflow-hidden'); }
  @HostListener('document:keydown.escape') onEscape(): void { if (this.selectedImage() !== null) this.close(); }
  onImageError(event: Event, index: number, vertical: boolean): void { setImageFallback(event, `galería 0${index + 1}`, vertical ? 700 : 900, vertical ? 1000 : 700); }
}
