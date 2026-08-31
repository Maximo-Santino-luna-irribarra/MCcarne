import { Component } from '@angular/core';
import { LucideBadgeCheck, LucideHeartHandshake, LucideScissors } from '@lucide/angular';
import { setImageFallback } from '../../data/image-fallback';
@Component({ selector: 'app-about', imports: [LucideBadgeCheck, LucideHeartHandshake, LucideScissors], templateUrl: './about.html' })
export class AboutComponent { onImageError(event: Event, label: string, vertical = false): void { setImageFallback(event, label, vertical ? 700 : 1000, vertical ? 900 : 700); } }
