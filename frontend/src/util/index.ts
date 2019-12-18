export const delay = (ms: number = 1000) => new Promise(resolve => setTimeout(resolve, ms));

export const reverseSortOrder = (order: 'asc'|'desc') => order === 'desc' ? 'asc' : 'desc';

