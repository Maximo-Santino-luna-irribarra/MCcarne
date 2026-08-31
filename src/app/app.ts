import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { MarqueeComponent } from './components/marquee/marquee';
import { ProductsComponent } from './components/products/products';
import { PromotionsComponent } from './components/promotions/promotions';
import { AboutComponent } from './components/about/about';
import { GalleryComponent } from './components/gallery/gallery';
import { LocationComponent } from './components/location/location';
import { FooterComponent } from './components/footer/footer';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, MarqueeComponent, ProductsComponent, PromotionsComponent, AboutComponent, GalleryComponent, LocationComponent, FooterComponent, WhatsappBtnComponent],
  templateUrl: './app.html'
})
export class App {
}
