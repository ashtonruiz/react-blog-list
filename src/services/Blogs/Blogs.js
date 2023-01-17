import { checkError, client } from '../client.js';

export async function getBlogs() {
  const response = await client.from('blogs').select('*');
  console.log(response, 'this one');
  return checkError(response);
}
