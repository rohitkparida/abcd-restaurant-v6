const base = import.meta.env.BASE_URL;

export const sitePath = (value = '') => `${base}${value.replace(/^\/+/, '')}`;
export const assetPath = (value: string) => sitePath(`assets/${value.replace(/^\/+/, '').replace(/^assets\//, '')}`);
