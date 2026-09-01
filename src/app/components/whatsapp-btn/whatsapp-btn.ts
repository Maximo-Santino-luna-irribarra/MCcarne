import { Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';
import { LucideMapPin, LucideX } from '@lucide/angular';
import { BRANCHES, BranchLocation, whatsappUrl } from '../../data/locations';

@Component({
  selector: 'app-whatsapp-btn',
  imports: [LucideMapPin, LucideX],
  template: `
    @if (open()) {
      <div class="whatsapp-backdrop" (click)="close()" aria-hidden="true"></div>
      <section class="whatsapp-panel" role="dialog" aria-modal="true" aria-labelledby="whatsapp-title">
        <div class="flex items-start justify-between gap-4 border-b border-black/10 px-4 py-3">
          <div><p class="text-[.65rem] font-black uppercase tracking-[.16em] text-mc-red">WhatsApp</p><h2 id="whatsapp-title" class="mt-1 font-display text-2xl uppercase leading-none">¿Dónde querés hacer tu pedido?</h2></div>
          <button #closeButton type="button" class="grid size-9 shrink-0 place-items-center rounded-full hover:bg-black/5" (click)="close()" aria-label="Cerrar selector"><svg lucideX [size]="20"></svg></button>
        </div>
        <div class="max-h-[min(24rem,55vh)] space-y-2 overflow-y-auto p-3">
          @for (branch of branches; track branch.name) {
            <a class="whatsapp-branch" [href]="urlFor(branch)" target="_blank" rel="noopener noreferrer" (click)="close()"><svg lucideMapPin [size]="19" class="mt-0.5 shrink-0"></svg><span><strong>{{ branch.name }}</strong>@if (branch.address) { <small>{{ branch.address }}</small> } @else { <small>Ver ubicación en Google Maps</small> }</span></a>
          }
        </div>
      </section>
    }
    <button type="button" class="whatsapp-float" (click)="toggle()" [attr.aria-expanded]="open()" aria-haspopup="dialog" aria-label="Elegir sucursal para pedir por WhatsApp"><svg class="whatsapp-mark" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C8.85 3 3 8.78 3 15.88c0 2.5.74 4.94 2.14 7.02L3.75 28l5.25-1.36a13.14 13.14 0 0 0 7.03 2.01h.01C23.23 28.65 29 22.87 29 15.77 29 8.67 23.23 3 16.04 3Zm7.64 18.2c-.32.88-1.88 1.68-2.61 1.78-.68.1-1.54.14-2.48-.15-.57-.18-1.31-.42-2.26-.82-3.98-1.7-6.58-5.66-6.78-5.93-.2-.26-1.62-2.13-1.62-4.06 0-1.93 1.03-2.88 1.39-3.27.36-.39.79-.49 1.05-.49h.76c.24.01.57-.09.89.67.32.77 1.1 2.66 1.2 2.85.1.2.16.43.03.69-.13.26-.2.42-.39.65-.2.23-.41.51-.59.69-.2.2-.4.41-.17.8.23.39 1.02 1.65 2.19 2.67 1.5 1.32 2.77 1.73 3.16 1.93.39.2.62.16.85-.1.23-.26.97-1.12 1.23-1.51.26-.39.52-.33.88-.2.36.13 2.3 1.07 2.69 1.27.39.2.65.29.75.46.1.16.1.94-.22 1.82Z"/></svg><span class="hidden sm:inline">WhatsApp</span></button>
  `
})
export class WhatsappBtnComponent {
  readonly branches = BRANCHES;
  readonly open = signal(false);
  readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');
  toggle(): void {
    if (this.open()) { this.close(); return; }
    this.open.set(true);
    setTimeout(() => this.closeButton()?.nativeElement.focus());
  }
  close(): void {
    if (!this.open()) return;
    this.open.set(false);
    setTimeout(() => document.querySelector<HTMLButtonElement>('.whatsapp-float')?.focus());
  }
  urlFor(branch: BranchLocation): string { return whatsappUrl(branch); }
  @HostListener('document:keydown.escape') onEscape(): void { this.close(); }
}
