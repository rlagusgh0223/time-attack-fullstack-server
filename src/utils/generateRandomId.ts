import { customAlphabet } from 'nanoid';

const RANDOM_ID_BASE =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const generateRandomId = customAlphabet(RANDOM_ID_BASE, 10);

export default generateRandomId;
