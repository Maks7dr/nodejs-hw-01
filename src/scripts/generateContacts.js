import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    let currentContact = await readContacts();
    for (let i = 0; i < number; i++) {
      currentContact.push(createFakeContact());
      await writeContacts(currentContact);
    }
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
