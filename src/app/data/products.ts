export interface Product { readonly name: string; readonly description: string; readonly image: string; readonly price: number | null; readonly tag: string; }
export const PRODUCTS: readonly Product[] = [
  { name: 'Asado', description: 'El clásico argentino, cortado como corresponde.', image: 'image/carnes/image.png', price: null, tag: 'Parrilla' },
  { name: 'Vacío', description: 'Tierno, sabroso y listo para fuego lento.', image: 'assets/images/products/vacio.webp', price: null, tag: 'Favorito' },
  { name: 'Entraña', description: 'Sabor intenso y cocción rápida.', image: 'assets/images/products/entrana.webp', price: null, tag: 'Premium' },
  { name: 'Matambre', description: 'Versátil, fresco y seleccionado.', image: 'assets/images/products/matambre.webp', price: null, tag: 'Selección' },
  { name: 'Bife de chorizo', description: 'Jugoso, generoso y bien argentino.', image: 'assets/images/products/bife-chorizo.webp', price: null, tag: 'Premium' },
  { name: 'Bondiola', description: 'Marmolada y perfecta para compartir.', image: 'assets/images/products/bondiola.webp', price: null, tag: 'Cerdo' }
];
