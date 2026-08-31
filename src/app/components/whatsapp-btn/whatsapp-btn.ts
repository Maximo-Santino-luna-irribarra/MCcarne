import { Component } from '@angular/core';
import { LucideMessageCircle } from '@lucide/angular';
@Component({ selector: 'app-whatsapp-btn', imports: [LucideMessageCircle], template: `<a class="whatsapp-float" href="https://wa.me/541169364551?text=Hola%20MC%20Carne%2C%20quer%C3%ADa%20hacer%20una%20consulta" target="_blank" rel="noopener" aria-label="Consultar a MC Carne por WhatsApp"><svg lucideMessageCircle [size]="28"></svg><span class="hidden sm:inline">WhatsApp</span></a>` })
export class WhatsappBtnComponent {}
