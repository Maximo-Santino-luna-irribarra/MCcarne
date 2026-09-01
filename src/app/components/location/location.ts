import { Component, signal } from '@angular/core';
import { LucideClock3, LucideMapPin, LucideMessageCircle, LucideNavigation, LucidePhone } from '@lucide/angular';
import { BRANCHES, BranchLocation, whatsappUrl } from '../../data/locations';
@Component({ selector: 'app-location', imports: [LucideClock3, LucideMapPin, LucideMessageCircle, LucideNavigation, LucidePhone], templateUrl: './location.html' })
export class LocationComponent {
  readonly branches = BRANCHES;
  readonly selected = signal<BranchLocation>(BRANCHES[0]);
  select(branch: BranchLocation): void { this.selected.set(branch); }
  whatsappFor(branch: BranchLocation): string { return whatsappUrl(branch); }
}
