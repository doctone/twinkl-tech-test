import { useQuery } from "@tanstack/react-query";
import { getPosts, Post } from "./api";

export function usePosts() {
  return useQuery<Post[]>({ queryKey: ["posts"], queryFn: getPosts });
}
