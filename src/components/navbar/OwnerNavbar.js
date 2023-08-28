import {
  Box,
  Flex,
  Heading,
  useDisclosure,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

import React from "react";
import { HamburgerIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  Divider,
  DrawerHeader,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import pic from "../../Images/logo.png";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState("left");
  return (
    <>
      <Box
        p="2"
        borderStyle={"solid"}
        borderColor={useColorModeValue("#272343")}
        borderBottom={1}
        bg={"#e3f6f5"}
      >
        <Flex
          h={16}
          p="8"
          alignItems={"center"}
          justifyContent={"space-between"}
          bg={"#e3f6f5"}
        >
          <Box
            w="100"
            gap="30px"
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            bg={"#e3f6f5"}
          >
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={onOpen}
              bg={"#ffd803"}
              _hover={{ bg: "#e3f6f5" }}
            >
              <HamburgerIcon />
            </Button>
            <Heading as="h2" size="md" noOfLines={1}>
              UIU Canteey
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg={"#e3f6f5"}>
            <Image src={pic} w="100px" h="100px" alt="Logo" />
          </DrawerHeader>
          <DrawerBody bg={"#e3f6f5"}>
            <Link to="/owner/ownerpage">
              <Flex
                align="center"
                p="4"
                mx="-2"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                textColor={"#272343"}
                _hover={{
                  bg: "#ffd803",
                  color: "#272343",
                }}
              >
                <ChevronRightIcon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: "#272343",
                  }}
                />
                Dashboard
              </Flex>
            </Link>
            <Divider />

            <Link to="/owner/add-category" _focus={{ boxShadow: "none" }}>
              <Flex
                align="center"
                p="4"
                mx="-2"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                textColor={"#272343"}
                _hover={{
                  bg: "#ffd803",
                  color: "#272343",
                }}
              >
                <ChevronRightIcon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: "#272343",
                  }}
                />
                Add Category
              </Flex>
            </Link>
            <Divider />
            <Link to="/owner/add-items" _focus={{ boxShadow: "none" }}>
              <Flex
                align="center"
                p="4"
                mx="-2"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                textColor={"#272343"}
                _hover={{
                  bg: "#ffd803",
                  color: "#272343",
                }}
              >
                <ChevronRightIcon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: "#272343",
                  }}
                />
                Add Item
              </Flex>
            </Link>
            <Divider />
            <Link to="/owner/total-order" _focus={{ boxShadow: "none" }}>
              <Flex
                align="center"
                p="4"
                mx="-2"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                textColor={"#272343"}
                _hover={{
                  bg: "#ffd803",
                  color: "#272343",
                }}
              >
                <ChevronRightIcon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: "#272343",
                  }}
                />
                Total Orders
              </Flex>
            </Link>
            <Divider />

            <Link to="/" _focus={{ boxShadow: "none" }}>
              <Flex
                align="center"
                p="4"
                mx="-2"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                textColor={"#272343"}
                _hover={{
                  bg: "#ffd803",
                  color: "#272343",
                }}
              >
                <ChevronRightIcon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: "#272343",
                  }}
                />
                Logout
              </Flex>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// import { Heading } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// export default function StudentNavbar(props) {
//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg "
//         style={{ background: `#faeee7` }}
//       >
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   aria-current="page"
//                   to="/student/studentmenu"
//                 >
//                   Menu
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/">
//                   Log Out
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   aria-current="page"
//                   to="/facultylogin"
//                 >
//                   Faculty
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/ownerlogin">
//                   Owner
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">
//                   {props.aboutText}
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// StudentNavbar.defaultProps = {
//   title: "UIU Canteey",
// };

// import { Link } from "react-router-dom";

// export default function FacultyNavbar(props) {
//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg "
//         style={{ background: `#faeee7` }}
//       >
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   aria-current="page"
//                   to="/faculty/facultymenu"
//                 >
//                   Menu
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   aria-current="page"
//                   to="/faculty/facultyorder"
//                 >
//                   My Orders
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/">
//                   Log Out
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// FacultyNavbar.defaultProps = {
//   title: "UIU Canteey",
// };

// import { Link } from "react-router-dom";

// export default function OwnerNavbar(props) {
//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg "
//         style={{ background: `#faeee7` }}
//       >
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   aria-current="page"
//                   to="/owner/ownerpage"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   aria-current="page"
//                   to="/owner/addcategory"
//                 >
//                   Add Category
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   aria-current="page"
//                   to="/owner/additem"
//                 >
//                   Add Item
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   aria-current="page"
//                   to="/owner/totalorder"
//                 >
//                   Total Orders
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/">
//                   Log Out
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// OwnerNavbar.defaultProps = {
//   title: "UIU Canteey",
// };
