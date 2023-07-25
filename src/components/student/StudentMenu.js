import { Box, Heading, Flex, Select, FormLabel } from "@chakra-ui/react";
import StudentNavbar from "../navbar/StudentNavbar";
export default function StudentMenu() {
  return (
    <>
      <StudentNavbar />
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
