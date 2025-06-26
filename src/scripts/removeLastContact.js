import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    const newArr = contacts.slice(0, -1);
    await writeContacts(newArr);
  }
};

removeLastContact();
