import { Box, Text, Heading, Stack, Button } from "@chakra-ui/react";
import { Post } from "../api";
import { useDeletePost } from "../usePosts";

export const PostItem = ({ id, title, body }: Post) => {
  const { mutate } = useDeletePost(id);
  const handleDelete = () => {
    mutate(id);
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      m={4}
      bg="white"
      shadow="md"
      width="100%"
      maxW={["350px", "800px"]}
    >
      <Stack spacing={3} direction="row">
        <Box>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{body}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Button onClick={handleDelete}>Remove</Button>
        </Box>
      </Stack>
    </Box>
  );
};
