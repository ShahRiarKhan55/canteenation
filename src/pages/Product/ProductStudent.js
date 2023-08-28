import { Flex, Circle, Box, Image, Badge, SimpleGrid } from "@chakra-ui/react";

// import Solid from "../../Images/icons8-vegetarian-food-symbol-48.png";
// import Drinks from "../../Images/icons8-non-vegetarian-food-symbol-48.png";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
import "./Order.css";

function ProductAddToCart(props) {
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
                    <Box fontSize="2xl"></Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      flexDirection="column-reverse"
                      alignItems="center"
                      mr="20"
                    ></Box>
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
