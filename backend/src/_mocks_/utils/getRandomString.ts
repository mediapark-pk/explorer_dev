import { generate } from 'randomstring';

export const getRandomString = (length: number): string => generate(length);
