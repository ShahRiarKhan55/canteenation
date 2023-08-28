import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Box,
  Flex,
  // Button,
  Heading,
  useColorModeValue,
  Tr,
  Th,
  // Icon,
  Td,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  TableContainer,
  // ButtonGroup,
} from "@chakra-ui/react";
import OwnerNavbar from "../navbar/OwnerNavbar";
// import { DeleteIcon } from "@chakra-ui/icons";
// import { MdModeEditOutline } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Category() {
  const [orderlist, setOrderlist] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("/showorders", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });
      const data = await res.json();
      setOrderlist(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
            <Heading as="h2" size="md" noOfLines={1}>
              Total Orders
            </Heading>
          </Box>
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
                Food Items
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Total Price
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Order By
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Order ID
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Room No.
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Phone No.
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Order On
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Payment Status
              </Th>
              {/* <Th isNumeric fontSize="1.5rem" textColor={"#272343"}>
                Action
              </Th> */}
            </Tr>
          </Thead>
          {orderlist.map((item, index) => {
            var date = new Date(item.orderDate);
            return (
              <Tbody key={item.id}>
                <Tr>
                  <Td textAlign={"center"}>{index + 1}</Td>
                  <Td>
                    <Accordion allowMultiple>
                      {item.order.map((data) => {
                        return (
                          <AccordionItem key={data.id}>
                            <h2>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  {data.name}
                                </Box>
                                <Box flex="1" textAlign="right">
                                  {data.quantity}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>{data.price}</AccordionPanel>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </Td>
                  <Td textAlign={"center"}>{item.totalprice}</Td>
                  <Td textAlign={"center"}>{item.facultyname}</Td>
                  <Td textAlign={"center"}>{item.orderid}</Td>
                  <Td textAlign={"center"}>{item.facultyroom}</Td>
                  <Td textAlign={"center"}>{item.facultyphone}</Td>
                  <Td textAlign={"center"}>{date.toLocaleDateString()}</Td>
                  <Td textAlign={"center"}>{item.paymentStatus}</Td>
                  {/* <Td isNumeric>
                    <ButtonGroup>
                      <Button>
                        <DeleteIcon />
                      </Button>
                      <Button>
                        <Icon as={MdModeEditOutline} />
                      </Button>
                    </ButtonGroup>
                  </Td> */}
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
    </>
  );
}
