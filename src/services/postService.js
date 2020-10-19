import http from "./httpService";
import { apiUrl } from "../config.json";

// export function getCard(cardId) {
//   return http.get(`${apiUrl}/cards/${cardId}`);
// }

// export function deleteCard(cardId) {
//   return http.delete(`${apiUrl}/cards/${cardId}`);
// }

// export function editCard(card) {
//   const cardId = card._id;
//   delete card._id;
//   return http.put(`${apiUrl}/cards/${cardId}`, card);
// }

export function getAllPosts() {
  return http.get(`${apiUrl}/posts`);
}

export function createPost(post) {
  return http.post(`${apiUrl}/posts`, post);
}

export default {
  createPost,
  getAllPosts,
//   editCard,
//   getCard,
//   deleteCard,
};
