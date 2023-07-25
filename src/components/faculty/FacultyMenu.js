import { Box, Heading, Flex, Select, FormLabel } from "@chakra-ui/react";
import FacultyNavbar from "../navbar/FacultyNavbar";
export default function FacultyMenu() {
  return (
    <>
      <FacultyNavbar />
      <Flex justifyContent="space-between">
        <Heading as="h2" p="10" size="2xl">
          Menu Item
        </Heading>
        <Box p="8" display="flex" alignItems="center" gap="20px">
          <FormLabel>Filter</FormLabel>
          <Select placeholder="Select option" w="2xl"></Select>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column-reverse"
          alignItems="center"
          mr="20"
        ></Box>
      </Flex>
    </>
  );
}
