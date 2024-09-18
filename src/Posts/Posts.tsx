import { List, ListItem, Text } from "@chakra-ui/react";
import { PostItem } from "./PostItem";
import { Post } from "../api";

export const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          </ListItem>
        ))}
      </List>
      {posts.length === 0 && <Text>No posts match your search criteria.</Text>}
    </>
  );
};
