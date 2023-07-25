import { Flex, Container, Heading, Stack, Text, Image } from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"full"} style={{ background: `#faeee7` }}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 8 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          UIU{" "}
          <Text as={"span"} color={"#33272a"}>
            Canteey
          </Text>
        </Heading>
        <Text color={"#594a4e"} maxW={"2xl"}>
          A university canteen is a dining facility located on a university
          campus that provides meals and refreshments to students, faculty, and
          staff. The university canteen doesn’t only provide food but also
          wonderful memories. It serves as a convenient and accessible place for
          members of the university community to have meals, snacks, and
          beverages during the day.
        </Text>
        <Flex align={"center"}>
          <Image
            w="100vh"
            h="60vh"
            src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpg"
            alt="food_image"
            align="center"
          />
        </Flex>
      </Stack>
    </Container>
  );
}
