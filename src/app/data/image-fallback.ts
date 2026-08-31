export function setImageFallback(event: Event, label: string, width = 800, height = 600): void {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.dataset['fallbackApplied']) return;
  image.dataset['fallbackApplied'] = 'true';
  const safeLabel = label.toUpperCase().replace(/[<>&'\"]/g, '');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#F2E6D2"/><path d="M7 7h${width - 14}v${height - 14}H7z" fill="none" stroke="#C8102E" stroke-width="14" stroke-dasharray="24 16"/><circle cx="${width / 2}" cy="${height / 2 - 45}" r="55" fill="#C8102E"/><text x="50%" y="${height / 2 - 27}" text-anchor="middle" font-family="Arial Black,Arial" font-size="46" font-weight="900" fill="white">MC</text><text x="50%" y="${height / 2 + 58}" text-anchor="middle" font-family="Arial Narrow,Arial" font-size="28" font-weight="800" fill="#8F0D1B">[ FOTO ${safeLabel} ]</text><text x="50%" y="${height / 2 + 94}" text-anchor="middle" font-family="Arial" font-size="18" fill="#171717">${width} × ${height} PX · REEMPLAZAR ASSET LOCAL</text></svg>`;
  image.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
