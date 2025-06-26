import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  const arrLength = contacts.length;
  return arrLength;
};

console.log(await countContacts());
