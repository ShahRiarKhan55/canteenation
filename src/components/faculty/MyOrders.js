import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Tr,
  Th,
  Td,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  TableContainer,
} from "@chakra-ui/react";
import FacultyNavbar from "../navbar/FacultyNavbar";
import { useState, useEffect } from "react";
// import { RoleContext } from "../../App";
// import { useContext } from "react";
import name from "../../auth/FacultyRegister";

export default function Category() {
  //   const role = useContext(RoleContext);
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
      var data = await res.json();
      data = data.filter((item) => {
        return item.facultyname === name.name;
      });
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
      <FacultyNavbar />
      <Box
        p="2"
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
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
                Order ID
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Total Price
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Order On
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Payment Status
              </Th>
              <Th fontSize="1.5rem" textColor={"#272343"}>
                Order Status
              </Th>
            </Tr>
          </Thead>
          {orderlist.map((item, index) => {
            var date = new Date(item.orderDate);
            return (
              <Tbody key={item.id}>
                <Tr>
                  <Td>{index + 1}</Td>
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
                                <Box flex="1" textAlign="left">
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
                  <Td>{item.orderid}</Td>
                  <Td>{item.totalprice}</Td>
                  <Td>{date.toLocaleDateString()}</Td>
                  <Td>{item.paymentStatus}</Td>
                  <Td>{item.orderStatus}</Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
    </>
  );
}
