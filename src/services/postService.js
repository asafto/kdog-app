import http from './httpService';
import { apiUrl } from '../config.json';

// export function getCard(cardId) {
//   return http.get(`${apiUrl}/cards/${cardId}`);
// }

// export function editCard(card) {
//   const cardId = card._id;
//   delete card._id;
//   return http.put(`${apiUrl}/cards/${cardId}`, card);
// }

export async function deletePost(post_id) {
  return await http.delete(`${apiUrl}/posts/${post_id}`);
}

export async function getAllPosts() {
  return await http.get(`${apiUrl}/posts`);
}

export async function createPost(post) {
  return await http.post(`${apiUrl}/posts`, post, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
}

export default {
  createPost,
  getAllPosts,
  deletePost,
  //   editCard,
  //   getCard,
};
