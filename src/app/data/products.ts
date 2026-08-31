export interface Product { readonly name: string; readonly description: string; readonly image: string; readonly price: number | null; readonly tag: string; }
export const PRODUCTS: readonly Product[] = [
  { name: 'Asado', description: 'El clásico argentino, cortado como corresponde.', image: 'image/carnes/image.png', price: null, tag: 'Parrilla' },
  { name: 'Vacío', description: 'Tierno, sabroso y listo para fuego lento.', image: 'image/carnes/carne1.png', price: null, tag: 'Favorito' },
  { name: 'Entraña', description: 'Sabor intenso y cocción rápida.', image: 'image/carnes/WhatsApp%20Image%202026-08-31%20at%2012.56.02.jpeg', price: null, tag: 'Premium' },
  { name: 'Matambre', description: 'Versátil, fresco y seleccionado.', image: 'image/carniceria/image.png', price: null, tag: 'Selección' },
  { name: 'Bife de chorizo', description: 'Jugoso, generoso y bien argentino.', image: 'image/carnes/image.png', price: null, tag: 'Premium' },
  { name: 'Bondiola', description: 'Marmolada y perfecta para compartir.', image: 'image/carnes/carne1.png', price: null, tag: 'Cerdo' }
];
