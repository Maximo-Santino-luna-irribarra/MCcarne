export interface Promotion { readonly name: string; readonly detail: string; readonly image: string; readonly label: string; }
export const PROMOTIONS: readonly Promotion[] = [
  { name: 'Combo parrillero', detail: 'Una selección rendidora para encender el fuego.', image: 'assets/images/promos/combo-parrillero.webp', label: 'Fuego listo' },
  { name: 'Combo familia', detail: 'Variedad para resolver las comidas de la semana.', image: 'assets/images/promos/combo-familia.webp', label: 'Más elegido' },
  { name: 'Combo milanesas', detail: 'Tiernas, frescas y listas para cocinar.', image: 'assets/images/promos/combo-milanesas.webp', label: 'Práctico' }
];
