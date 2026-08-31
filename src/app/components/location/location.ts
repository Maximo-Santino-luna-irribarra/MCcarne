import { Component } from '@angular/core';
import { LucideClock3, LucideMapPin, LucideMessageCircle, LucideNavigation, LucidePhone } from '@lucide/angular';
import { LOCATION } from '../../data/locations';
@Component({ selector: 'app-location', imports: [LucideClock3, LucideMapPin, LucideMessageCircle, LucideNavigation, LucidePhone], templateUrl: './location.html' })
export class LocationComponent { readonly location = LOCATION; }
