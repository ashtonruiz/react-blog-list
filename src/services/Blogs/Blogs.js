import { checkError, client } from '../client.js';

export default async function getBlogs() {
  const response = await client.from('blogs').select('*');
  return checkError(response);
}
