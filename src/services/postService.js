import http from './httpService';
import { apiUrl } from '../config.json';

export async function likeUnlikePost(post_id) {
  return await http.post(`${apiUrl}/posts/${post_id}/like`);
}

export async function editPost(post_id, values) {
  return await http.patch(`${apiUrl}/posts/${post_id}`, values);
}

export async function getPostImage(currentImageKey) {
  return await http.get(`${apiUrl}/posts/image/${currentImageKey}`);
};

export async function getPost(post_id) {
  return await http.get(`${apiUrl}/posts/${post_id}`);
}

export async function deletePost(post_id) {
  return await http.delete(`${apiUrl}/posts/${post_id}`);
}

export async function getAllPosts() {
  return await http.get(`${apiUrl}/posts`);
}

export async function createPost(post) {
  return await http.post(`${apiUrl}/posts`, post);
}

export default {
  createPost,
  getAllPosts,
  deletePost,
  getPost,
  getPostImage,
  editPost,
  likeUnlikePost,
};
