import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import pic from "../Images/blob-scene-haikei.png";

export default function SignupCard() {
  let name, value;
  const [showPassword, setShowPassword] = useState(false);
  const [owner, setOwner] = useState({
    usercode: "",
    name: "",
    email: "",
    phone_no: "",
    canteen_name: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setOwner((prevOwner) => ({ ...prevOwner, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      usercode,
      name,
      email,
      phone_no,
      canteen_name,
      password,
      cpassword,
    } = owner;
    try {
      const res = await fetch("./owner_register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usercode,
          name,
          email,
          phone_no,
          canteen_name,
          password,
          cpassword,
        }),
      });
      const dataa = await res.json();
      console.log(dataa);
      if (dataa === "422") {
        return alert("Fill the form");
      }
      if (dataa === "423") {
        return alert("user already exist");
      }
      if (dataa === "425") {
        return alert("password is not matching");
      }
      if (dataa === "200") {
        return alert("Succesfully Registered");
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundImage={pic}
      backgroundPosition={"center"}
      backgroundSize={"1900px"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} textColor={"#272343"}>
            Sign Up
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"#fffffe"} boxShadow={"lg"} p={8} w="393px">
          <Stack spacing={4}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              textColor={"#272343"}
            >
              Owner
            </Heading>
            <HStack>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  onChange={handleInputs}
                  bg={"#e3f6f5"}
                />
              </FormControl>
            </HStack>

            <FormControl id="usercode" isRequired>
              <FormLabel>User Code</FormLabel>
              <Input
                type="text"
                name="usercode"
                maxLength="10"
                minLength="10"
                onChange={handleInputs}
                bg={"#e3f6f5"}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                name="email"
                onChange={handleInputs}
                bg={"#e3f6f5"}
              />
            </FormControl>

            <FormControl id="phone_no" isRequired>
              <FormLabel>Phone No.</FormLabel>
              <Input
                type="number"
                name="phone_no"
                onChange={handleInputs}
                bg={"#e3f6f5"}
              />
            </FormControl>

            <FormControl id="canteen_name" isRequired>
              <FormLabel>Canteen Name</FormLabel>
              <Input
                type="text"
                name="canteen_name"
                onChange={handleInputs}
                bg={"#e3f6f5"}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleInputs}
                  bg={"#e3f6f5"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="cpassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="cpassword"
                  onChange={handleInputs}
                  bg={"#e3f6f5"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"#ffd803"}
                textColor={"#272343"}
                _hover={{
                  bg: "#e3f6f5",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link
                  color={"#272343"}
                  href="/ownerlogin"
                  _hover={{ textColor: "#ffd803" }}
                  textDecoration={"underline"}
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
