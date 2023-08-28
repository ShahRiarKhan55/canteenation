import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  SimpleGrid,
  Icon,
  chakra,
  Tooltip,
  useToast,
  Button,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
// import Solid from "../../Images/icons8-vegetarian-food-symbol-48.png";
// import Drinks from "../../Images/icons8-non-vegetarian-food-symbol-48.png";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
import "./Order.css";

function ProductAddToCart(props) {
  const navigate = useNavigate();
  const toast = useToast();
  const { addItem, items } = useCart();
  return (
    <>
      <SimpleGrid minChildWidth="250px" spacing={2} p="10">
        <Flex
          className="flex-div"
          gap="10px"
          alignItems="stretch"
          flexWrap="wrap"
        >
          {props.itm.length === 0 && (
            <Box>
              <h1>No Items</h1>
            </Box>
          )}
          {props.itm.map((data) => {
            return (
              <Box
                maxW="355px"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                key={data.id}
                bg={"#fffffe"}
              >
                {data.isNew && (
                  <Circle
                    size="10px"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="red.200"
                    border="2"
                  />
                )}

                <Image
                  src={data.image}
                  alt={`Picture of ${data.name}`}
                  roundedTop="lg"
                  maxW="fit"
                  maxH="sm"
                  objectFit="cover"
                />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    {data.isNew && (
                      <Badge
                        rounded="full"
                        px="2"
                        fontSize="0.8em"
                        colorScheme="red"
                      >
                        New
                      </Badge>
                    )}
                  </Box>
                  <Flex
                    mt="1"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box
                      fontSize="2xl"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      textColor={"#272343"}
                    >
                      {data.name}
                    </Box>
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
                    <Box fontSize="2xl">
                      <Box as="span" color={"gray.600"} fontSize="lg">
                        ৳
                      </Box>
                      {data.price}
                    </Box>
                  </Flex>
                  <Flex justifyContent="space-between" alignContent="center">
                    <Box fontSize="2xl">
                      <Box as="span" color={"gray.600"}>
                        Q. &nbsp;
                      </Box>
                      {data.remain}/{data.quantity}
                    </Box>
                  </Flex>
                  <Flex justifyContent="space-between" alignContent="center">
                    <Box fontSize="2xl">
                      <Box as="span" color={"gray.600"} fontSize="lg"></Box>
                      {data.type === "Solid" ? (
                        <FaBowlFood />
                      ) : (
                        <BiSolidDrink />
                      )}
                    </Box>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    alignContent="center"
                    mt="2"
                  >
                    <Box fontSize="2xl">
                      <Button
                        colorScheme="teal"
                        w="100"
                        bg={"#ffd803"}
                        textColor={"#272343"}
                        _hover={{ bg: "#e3f6f5" }}
                        onClick={() => {
                          navigate("/faculty/item-page");
                          addItem(data);
                        }}
                      >
                        Buy Now
                      </Button>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      flexDirection="column-reverse"
                      alignItems="center"
                      mr="20"
                    >
                      <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={"top"}
                        color={"gray.800"}
                        fontSize={"1.2em"}
                      >
                        <chakra.a href={"#"} display={"flex"}>
                          <Icon
                            onClick={() => {
                              addItem(data);
                              toast({
                                title: `Added ${data.name} into Cart`,
                                position: "top-right",
                                status: "success",
                                isClosable: true,
                              });
                            }}
                            as={FiShoppingCart}
                            h={7}
                            w={7}
                            alignSelf={"center"}
                          />
                        </chakra.a>
                      </Tooltip>
                      {items.map((item, index) => {
                        if (item.name === data.name) {
                          return (
                            <Badge key={index} colorScheme="green">
                              {item.quantity}
                            </Badge>
                          );
                        } else return null;
                      })}
                    </Box>
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </SimpleGrid>
    </>
  );
}

export default ProductAddToCart;
