import http from './httpService';
import { apiUrl } from '../config.json';

export function editPost(post_id, values) {
  return http.patch(`${apiUrl}/posts/${post_id}`, values);
}

export async function getPostImage(post_id,image_name) {
  return await http.get(`${apiUrl}/posts/${post_id}/${image_name}`);
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
  getPost,
  getPostImage,
  editPost
};
