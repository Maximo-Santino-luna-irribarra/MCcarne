export interface Promotion { readonly name: string; readonly detail: string; readonly image: string; readonly label: string; }
export const PROMOTIONS: readonly Promotion[] = [
  { name: 'Combo parrillero', detail: 'Una selección rendidora para encender el fuego.', image: 'image/carnes/WhatsApp%20Image%202026-08-31%20at%2012.56.02.jpeg', label: 'Fuego listo' },
  { name: 'Combo familia', detail: 'Variedad para resolver las comidas de la semana.', image: 'image/carnes/image.png', label: 'Más elegido' },
  { name: 'Combo milanesas', detail: 'Tiernas, frescas y listas para cocinar.', image: 'image/carnes/carne1.png', label: 'Práctico' }
];
