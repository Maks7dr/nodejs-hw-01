import { PATH_DB } from '../constants/contacts.js';
const fs = require('node:fs/promises');

export const writeContacts = async (updatedContacts) => {
  try {
    const dataToWrite = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf-8');
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
