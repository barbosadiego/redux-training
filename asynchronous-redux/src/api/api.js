export const getPostById = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/Posts/${id}`);
export const getPostsBulk = () =>
  fetch(`https://jsonplaceholder.typicode.com/posts`);
