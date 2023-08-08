import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  NumberInput,
  NumberInputField,
  Text,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
  Divider,
  Button,
  Image,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import FacultyNavbar from "../navbar/FacultyNavbar";
import SupportedCard from "../../Images/images.jpeg";
import { BsCreditCard2BackFill, BsCashStack } from "react-icons/bs";
import { DeleteIcon } from "@chakra-ui/icons";
import "./Cart.css";
import { useCart } from "react-use-cart";
import { RoleContext } from "../../App";
import { useContext } from "react";

export default function ItemPage() {
  const role = useContext(RoleContext);
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  let totalprice;
  let order = {
    orders: [{}],
  };
  const addorder = async () => {
    totalprice = cartTotal;
    order.orders = items;
    let paymentStatus = "Pending";
    try {
      const res = await fetch("/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order,
          totalprice,
          facultyname: role.name,
          facid: role._id,
          facultyroom: role.room_no,
          facultyphone: role.phone_no,
          paymentStatus,
        }),
      });

      const dataa = await res.json();

      if (dataa === "404") {
        return alert("Wrong");
      }
      if (dataa === "200") {
        alert("Success");
      }
    } catch (err) {
      alert(err);
    }
    emptyCart();
  };
  return (
    <>
      <FacultyNavbar />
      <Flex flexDirection="row" justifyContent="space-between" p="5">
        <div className="responsive-div">
          <Box
            w="100%"
            h="100%"
            p="5"
            borderColor="white"
            border="1px"
            borderRadius="8px"
          >
            <Heading as="h2" fontSize="2.8rem" noOfLines={1}>
              Food Cart
            </Heading>
            <Center>
              <Divider orientation="horizontal" />
            </Center>
            <TableContainer mt="14">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th fontSize="lg" textColor={"#272343"}></Th>
                    <Th fontSize="lg" textColor={"#272343"}>
                      Photo
                    </Th>
                    <Th fontSize="lg" textColor={"#272343"}>
                      Name
                    </Th>
                    <Th fontSize="lg" textColor={"#272343"}>
                      Price
                    </Th>
                    <Th fontSize="lg" textColor={"#272343"}>
                      Quantity
                    </Th>
                    <Th fontSize="lg" isNumeric textColor={"#272343"}>
                      SubTotal
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {isEmpty && (
                    <Tr>
                      <Td>Your Cart Is Empty</Td>
                    </Tr>
                  )}
                  {items.map((item, index) => {
                    return (
                      <Tr key={item.id}>
                        <Td>{index + 1}</Td>
                        <Td>
                          <Image
                            objectFit="contain"
                            boxSize="100px"
                            src={item.image}
                            alt={item.name}
                          />{" "}
                        </Td>
                        <Td>{item.name}</Td>
                        <Td>{item.price}</Td>
                        <Td>
                          <NumberInput
                            w="16"
                            value={item.quantity}
                            defaultValue={1}
                            min={0}
                            max={5}
                          >
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity + 1)
                                }
                              />
                              <NumberDecrementStepper
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity - 1)
                                }
                              />
                            </NumberInputStepper>

                            <IconButton
                              colorScheme="teal"
                              aria-label="Call Segun"
                              size="md"
                              variant="outline"
                              onClick={() => {
                                removeItem(item.id);
                              }}
                              icon={<DeleteIcon />}
                            />
                          </NumberInput>
                        </Td>
                        <Td isNumeric>{item.itemTotal}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th></Th>
                    <Th></Th>
                    <Th isNumeric></Th>
                    <Th isNumeric></Th>
                    <Th isNumeric fontSize="lg" textColor={"#ffd803"}>
                      Grand Total
                    </Th>
                    <Th isNumeric fontSize="lg">
                      {cartTotal}
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          <Box w="100%" h="100%" p="6">
            <Heading as="h2" fontSize="2.4rem" noOfLines={1}>
              Billing
            </Heading>
            <Center>
              <Divider orientation="horizontal" />
            </Center>
            <Box p="10" display="flex" justifyContent="space-between">
              <Text fontSize="2xl" textColor={"#ffd803"}>
                Grand Total
              </Text>
              <Text fontSize="2xl">
                <strong>৳{cartTotal}</strong>
              </Text>
            </Box>
            <Center>
              <Divider orientation="horizontal" />
            </Center>
            <Text fontSize="2xl" mt="5" textColor={"#272343"}>
              WE ACCEPT:
            </Text>
            <Image src={SupportedCard} alt="" />
            <Button
              colorScheme="teal"
              w="50%"
              mt="10"
              size="lg"
              bg={"#ffd803"}
              textColor={"#272343"}
              _hover={{ bg: "#e3f6f5" }}
            >
              <Icon as={BsCreditCard2BackFill} />
              &nbsp;&nbsp;Bkash
            </Button>
            <Button
              spacing
              colorScheme="teal"
              w="50%"
              mt="10"
              size="lg"
              bg={"#ffd803"}
              textColor={"#272343"}
              _hover={{ bg: "#e3f6f5" }}
            >
              <Icon as={BsCreditCard2BackFill} />
              &nbsp;&nbsp;Nagad
            </Button>
            <Divider orientation="horizontal" mt="8" />
            <Button
              colorScheme="teal"
              w="100%"
              mt="10"
              size="lg"
              onClick={addorder}
              bg={"#ffd803"}
              textColor={"#272343"}
              _hover={{ bg: "#e3f6f5" }}
            >
              <Icon as={BsCashStack} /> &nbsp;&nbsp;Pay By Cash
            </Button>
          </Box>
        </div>
      </Flex>
    </>
  );
}
