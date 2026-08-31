import { Component, HostListener, signal } from '@angular/core';
import { LucideMenu, LucideX, LucideShoppingBag } from '@lucide/angular';

@Component({ selector: 'app-header', imports: [LucideMenu, LucideX, LucideShoppingBag], templateUrl: './header.html' })
export class HeaderComponent {
  readonly menuOpen = signal(false);
  readonly compact = signal(false);
  @HostListener('window:scroll') onScroll(): void { this.compact.set(window.scrollY > 24); }
  toggleMenu(): void { this.menuOpen.update(value => !value); }
  closeMenu(): void { this.menuOpen.set(false); }
}
