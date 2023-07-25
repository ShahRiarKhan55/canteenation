import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
  Link,
  Center,
  Divider,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleCard(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginhandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("./owner_login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const dataa = await res.json();
      if (dataa === "405") {
        return alert("Invalid Credentials");
      }
      if (dataa === "404") {
        return alert("Enter all fields");
      }
      if (dataa === "406") {
        return alert("User is not registered");
      }
      if (dataa) {
        alert("Successfully Logged In");
        navigate("/owner/ownerpage");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#faeee7")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textColor={"#33272a"}>
            Sign in to your account
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              textColor={"#33272a"}
            >
              Owner
            </Heading>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                onClick={loginhandler}
                bg={"#ff8ba7"}
                color={"#33272a"}
                _hover={{
                  bg: "#c3f0ca",
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Want your own canteen?{" "}
                <Link
                  color={"#33272a"}
                  href="https://forms.gle/UYMAhXgRyqdKVf3h7"
                >
                  Click Here
                </Link>
              </Text>
            </Stack>
            <Divider />
            <Text align={"center"}>Got user code?</Text>
            <a href="/ownerregister">
              <Center>
                <Button
                  w="100%"
                  maxW={"md"}
                  variant={"outline"}
                  bg={"#c3f0ca"}
                  color={"#33272a"}
                  _hover={{
                    bg: "#ff8ba7",
                  }}
                >
                  Sign Up
                </Button>
              </Center>
            </a>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
