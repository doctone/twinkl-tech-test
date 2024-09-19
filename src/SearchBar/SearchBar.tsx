import { Box, FormLabel, Input } from "@chakra-ui/react";

export const SearchBar = ({
  searchTerm,
  onChange,
}: {
  searchTerm: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Box width="100%" maxW={["350px", "800px"]}>
      <FormLabel htmlFor="search-input" px={4}>
        Search Posts
      </FormLabel>
      <Input
        id="search-input"
        placeholder="e.g. 'search term'"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        mb={6}
        w="100%"
        bg="white"
      />
    </Box>
  );
};
