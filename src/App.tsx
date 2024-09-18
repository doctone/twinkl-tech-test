import { useState } from "react";
import { usePosts } from "./usePosts";
import { Center, VStack } from "@chakra-ui/react";
import { Posts } from "./Posts/Posts";
import { SearchBar } from "./Posts/SearchBar";

const App = () => {
  const { data: posts, isLoading } = usePosts();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading || !posts) {
    return <div>Loading...</div>;
  }
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Center py={10} my={10}>
      <VStack spacing={6} width="100%" align="center">
        <SearchBar onChange={setSearchTerm} searchTerm={searchTerm} />
        <Posts posts={filteredPosts} />
      </VStack>
    </Center>
  );
};

export default App;
