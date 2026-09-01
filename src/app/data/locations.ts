export interface BranchLocation {
  readonly name: string;
  readonly address?: string;
  readonly mapsUrl: string;
  readonly phoneDisplay: string;
  readonly phone: string;
  readonly hoursWeek: string;
  readonly hoursSunday: string;
}

const SHARED_CONTACT = { phoneDisplay: '011 6936-4551', phone: '+541169364551', hoursWeek: 'Lunes a Sábado · 08:00–21:00', hoursSunday: 'Domingos · 08:00–13:30' } as const;

/** Fuente única para ubicación, footer y selector de WhatsApp. */
export const BRANCHES: readonly BranchLocation[] = [
  { name: 'Monte Grande', address: 'Ramón Santamarina 1066, Monte Grande / El Jagüel, Buenos Aires', mapsUrl: 'https://maps.app.goo.gl/qbfSWJ317WE7B4cf9?g_st=ic', ...SHARED_CONTACT },
  { name: 'Ezeiza', mapsUrl: 'https://maps.app.goo.gl/b4APFALg2VY2fJP46?g_st=ic', ...SHARED_CONTACT },
  { name: 'El Jagüel', mapsUrl: 'https://maps.app.goo.gl/64yrxU1fcaH4tX6V9?g_st=ic', ...SHARED_CONTACT },
  { name: 'Luis Guillón', mapsUrl: 'https://maps.app.goo.gl/k4oWik1gVCHZWxbH8?g_st=ic', ...SHARED_CONTACT }
];

export function whatsappUrl(branch: BranchLocation): string {
  const message = `Hola, quiero realizar un pedido en la sucursal de ${branch.name}.`;
  return `https://wa.me/${branch.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_URL = 'https://www.instagram.com/mc_carne/';
export const SALES_CHANNEL_URL = 'https://whatsapp.com/channel/0029Vb7pBQu8vd1R2VIMJ607';
