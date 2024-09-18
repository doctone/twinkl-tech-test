import { Box, Text, Heading, Stack, Button } from "@chakra-ui/react";
import { Post } from "../api";

export const PostItem = ({ title, body }: Post) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      m={4}
      bg="white"
      shadow="md"
      width="100%"
      maxW="800px"
    >
      <Stack spacing={3} direction="row">
        <Box>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{body}</Text>
        </Box>
        <Button>Delete</Button>
      </Stack>
    </Box>
  );
};
