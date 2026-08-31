import { Component } from '@angular/core';
import { LucideArrowDownRight, LucideMessageCircle } from '@lucide/angular';
import { setImageFallback } from '../../data/image-fallback';
@Component({ selector: 'app-hero', imports: [LucideArrowDownRight, LucideMessageCircle], templateUrl: './hero.html' })
export class HeroComponent { onImageError(event: Event): void { setImageFallback(event, 'principal', 900, 1080); } }
