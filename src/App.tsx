import { useState } from "react";
import { usePosts } from "./usePosts";
import { Center, VStack } from "@chakra-ui/react";
import { Posts } from "./Posts/Posts";
import { SearchBar } from "./SearchBar/SearchBar";

const App = () => {
  const { data: posts, isLoading, isError, error } = usePosts();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error:{error.message}</div>;
  }

  const filteredPosts =
    posts?.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase()),
    ) ?? [];

  return (
    <Center py={10}>
      <VStack spacing={6} width="100%" align="center">
        <SearchBar onChange={setSearchTerm} searchTerm={searchTerm} />
        <Posts posts={filteredPosts} />
      </VStack>
    </Center>
  );
};

export default App;
