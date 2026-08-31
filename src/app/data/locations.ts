export const LOCATION = { address: 'Ramón Santamarina 1066, Monte Grande / El Jagüel, Buenos Aires', phoneDisplay: '011 6936-4551', phone: '+541169364551', hoursWeek: 'Lunes a Sábado · 08:00–21:00', hoursSunday: 'Domingos · 08:00–13:30', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ram%C3%B3n+Santamarina+1066+Monte+Grande+Buenos+Aires' } as const;

export interface BranchLocation {
  readonly name: string;
  readonly mapsUrl: string;
}

export const LOCATIONS: readonly BranchLocation[] = [
  { name: 'Monte Grande', mapsUrl: 'https://maps.app.goo.gl/qbfSWJ317WE7B4cf9?g_st=ic' },
  { name: 'Ezeiza', mapsUrl: 'https://maps.app.goo.gl/b4APFALg2VY2fJP46?g_st=ic' },
  { name: 'El Jagüel', mapsUrl: 'https://maps.app.goo.gl/64yrxU1fcaH4tX6V9?g_st=ic' },
  { name: 'Luis Guillón', mapsUrl: 'https://maps.app.goo.gl/k4oWik1gVCHZWxbH8?g_st=ic' }
];

export const INSTAGRAM_URL = 'https://www.instagram.com/mc_carne/';
export const SALES_CHANNEL_URL = 'https://whatsapp.com/channel/0029Vb7pBQu8vd1R2VIMJ607';
