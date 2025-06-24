import { PATH_DB } from '../constants/contacts.js';
const fs = require('node:fs/promises');

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    console.log(error.massage);
    throw error;
  }
};
