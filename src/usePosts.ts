import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePosts, getPosts, Post } from "./api";

export function usePosts() {
  return useQuery<Post[]>({ queryKey: ["posts"], queryFn: getPosts });
}

export function useDeletePost(id: number) {
  const qc = useQueryClient();
  return useMutation<Post[], Error, number>({
    mutationKey: ["posts", id],
    mutationFn: deletePosts,
    onSuccess: () => {
      qc.invalidateQueries();
    },
  });
}
