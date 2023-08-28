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
  const [student, setStudent] = useState({
    email: "",
    studentid: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, studentid, password, cpassword } = student;
    try {
      const res = await fetch("./student_register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          studentid,
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
      backgroundSize={"1540px"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} textColor={"#272343"}>
            Sign Up
          </Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8} w="393px" bg={"#fffffe"}>
          <Stack spacing={4}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              textColor={"#33272a"}
            >
              Student
            </Heading>
            <HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  name="email"
                  onChange={handleInputs}
                  bg={"#e3f6f5"}
                />
              </FormControl>
            </HStack>

            <FormControl id="studentid" isRequired>
              <FormLabel>Student ID</FormLabel>
              <Input
                type="number"
                name="studentid"
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
                  href="/studentlogin"
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
