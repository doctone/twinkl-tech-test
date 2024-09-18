export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const API_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  return fetch(`${API_URL}/posts`).then((res) => res.json());
}

export async function deletePosts(id: number) {
  return fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
