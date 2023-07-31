import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Solid from "../../Images/icons8-vegetarian-food-symbol-48.png";
import Drinks from "../../Images/icons8-non-vegetarian-food-symbol-48.png";

function ProductAddToCart(props) {
  return (
    <Flex className="flex-div" gap="60px" alignItems="stretch" flexWrap="wrap">
      {props.itm.length === 0 && (
        <Box>
          <h1>No Items</h1>
        </Box>
      )}
      {props.itm.map((data) => {
        return (
          <Box
            maxW="sm"
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
              maxW="sm"
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
              <Flex mt="1" justifyContent="space-between" alignContent="center">
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
                  <Box as="span" color={"gray.600"} fontSize="1em">
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
                    <Image src={Solid}></Image>
                  ) : (
                    <Image src={Drinks}></Image>
                  )}
                </Box>
              </Flex>
              <Flex justifyContent="space-between" alignContent="center" mt="2">
                <Box fontSize="2xl">
                  <Tooltip
                    label="Delete Item"
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1.2em"}
                  >
                    <IconButton
                      colorScheme="teal"
                      aria-label="Call Segun"
                      size="md"
                      variant="null"
                      bg={"#e3f6f5"}
                      _hover={{ bg: "#ffd803" }}
                      icon={<DeleteIcon />}
                      onClick={async () => {
                        const res = window.confirm(
                          "Are u sure u wanna delete it"
                        );
                        if (res) {
                          await deleteDoc(doc(db, "items", data.id));
                        }
                      }}
                    />
                  </Tooltip>
                  <Tooltip
                    label="Edit Item"
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1.2em"}
                  >
                    <IconButton
                      colorScheme="teal"
                      aria-label="Call Segun"
                      size="md"
                      variant="null"
                      bg={"#ffd803"}
                      _hover={{ bg: "#e3f6f5" }}
                      icon={<EditIcon />}
                      onClick={() => {
                        props.update(data);
                      }}
                    />
                  </Tooltip>
                </Box>
              </Flex>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
}

export default ProductAddToCart;
