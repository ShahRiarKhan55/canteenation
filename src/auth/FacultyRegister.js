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

export default function SignupCard() {
  let name, value;
  const [showPassword, setShowPassword] = useState(false);
  const [faculty, setFaculty] = useState({
    name: "",
    email: "",
    room_no: "",
    phone_no: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFaculty((prevFaculty) => ({ ...prevFaculty, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, room_no, phone_no, password, cpassword } = faculty;
    try {
      const res = await fetch("./faculty_register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          room_no,
          phone_no,
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
        // navigate("/");
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
      bg={useColorModeValue("#faeee7")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} textColor={"#33272a"}>
            Sign Up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w="393px"
        >
          <Stack spacing={4}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              textColor={"#33272a"}
            >
              Faculty
            </Heading>
            <HStack>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" onChange={handleInputs} />
              </FormControl>
            </HStack>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="text" name="email" onChange={handleInputs} />
            </FormControl>

            <FormControl id="room_no" isRequired>
              <FormLabel>Room No.</FormLabel>
              <Input type="number" name="room_no" onChange={handleInputs} />
            </FormControl>

            <FormControl id="phone_no" isRequired>
              <FormLabel>Phone No.</FormLabel>
              <Input type="number" name="phone_no" onChange={handleInputs} />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleInputs}
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
                bg={"#ff8ba7"}
                color={"white"}
                _hover={{
                  bg: "#c3f0ca",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"#33272a"} href="/facultylogin">
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
