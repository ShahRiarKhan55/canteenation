import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Box,
  Flex,
  Button,
  Heading,
  useColorModeValue,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  ButtonGroup,
} from "@chakra-ui/react";
import OwnerNavbar from "../navbar/OwnerNavbar";
import { DeleteIcon } from "@chakra-ui/icons";

export default function Category() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cat, setCat] = useState("");
  const [catData, setCatData] = useState([]);
  const [del, setDel] = useState(false);

  const handleCat = async () => {
    try {
      const res = await fetch("/addcategories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: cat,
        }),
      });

      const dataa = await res.json();

      if (dataa === "404") {
        return alert("Wrong");
      }
      if (dataa === "200") {
        alert("Success");
        onClose();
      }
    } catch (err) {
      alert(err);
    }
  };
  const getData = async () => {
    try {
      const res = await fetch("/getcategories", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });
      const data = await res.json();
      setCatData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [catData, del]);

  return (
    <>
      <OwnerNavbar />
      <Box
        p="2"
        borderStyle={"solid"}
        borderColor={useColorModeValue("#fffffe", "gray.900")}
        borderBottom={1}
      >
        <Flex
          h={16}
          p="8"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            w="100"
            gap="30px"
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heading as="h2" size="md" noOfLines={1} textColor={"#272343"}>
              Categories
            </Heading>
          </Box>
          <Button
            colorScheme="teal"
            bg={"#ffd803"}
            textColor={"#272343"}
            onClick={onOpen}
            _hover={{ bg: "#e3f6f5" }}
          >
            + Add Category
          </Button>
        </Flex>
      </Box>
      <TableContainer p="9">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Sr. No.
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Category
              </Th>
              <Th isNumeric fontSize="1.5rem" textColor={"#272343"}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {catData.map((item, index) => {
              return (
                <Tr key={item.id}>
                  <Td>{index + 1}</Td>
                  <Td>{item.category}</Td>
                  <Td isNumeric>
                    <ButtonGroup>
                      <Button
                        bg={"#ffd803"}
                        _hover={{ bg: "#e3f6f5" }}
                        onClick={async () => {
                          setDel(!del);
                          try {
                            const res = await fetch("/deletecategorie", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                category: item.category,
                              }),
                            });

                            const dataa = await res.json();

                            if (dataa === "404") {
                              return alert("Wrong");
                            }
                          } catch (err) {
                            alert(err);
                          }
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </ButtonGroup>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textColor={"#272343"}>Add</ModalHeader>
          <ModalCloseButton color={"#272343"} />
          <ModalBody>
            <FormControl p="2">
              <FormLabel textColor={"#272343"}>Add Category</FormLabel>
              <Input
                type="text"
                textColor={"#272343"}
                onChange={(e) => setCat(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={onClose}
              bg={"#e3f6f5"}
              textColor={"#272343"}
              _hover={{ bg: "#ffd803" }}
            >
              Close
            </Button>
            <Button
              colorScheme="teal"
              bg={"#ffd803"}
              textColor={"#272343"}
              onClick={handleCat}
              mr={3}
              _hover={{ bg: "#e3f6f5" }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
