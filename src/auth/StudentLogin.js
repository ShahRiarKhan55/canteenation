import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Divider,
  Center,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../Images/blob-scene-haikei.png";

export default function SimpleCard(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginhandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("./student_login", {
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
        navigate("/student/studentmenu");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"fffffe"}>

    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundImage={pic}
      backgroundPosition={"center"}
      backgroundSize={"1540px"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textColor={"#272343"}>
            Sign in
          </Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8} w="393px" bg={"#fffffe"}>
          <Stack spacing={4}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              textColor={"#272343"}
            >
              Student
            </Heading>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                bg={"#e3f6f5"}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                bg={"#e3f6f5"}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={loginhandler}
                bg={"#ffd803"}
                textColor={"#272343"}
                _hover={{
                  bg: "#e3f6f5",
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Divider />
            <a href="/studentregister">
              <Center>
                <Button
                  w="100%"
                  maxW={"md"}
                  bg={"#e3f6f5"}
                  textColor={"#272343"}
                  _hover={{
                    bg: "#ffd803",
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
