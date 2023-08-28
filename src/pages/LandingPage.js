import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import Hero from "./Hero";
import logo from "../Images/logo.png";

export default function LandingPage() {
  return (
    <>
      {/* <Box bg={useColorModeValue("#e3f6f5")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box textColor={"#272343"}>UIU Canteey</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <ButtonGroup>
                <a href="/ownerlogin">
                  <Button
                    bg={"#ffd803"}
                    rounded={"md"}
                    textColor={"#272343"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#bae8e8"),
                    }}
                  >
                    Canteen Login
                  </Button>
                </a>
                <a href="/studentlogin">
                  <Button
                    bg={"#ffd803"}
                    rounded={"md"}
                    textColor={"#272343"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#bae8e8"),
                    }}
                  >
                    Student Login
                  </Button>
                </a>
                <a href="/facultylogin">
                  <Button
                    bg={"#ffd803"}
                    rounded={"md"}
                    textColor={"#272343"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#bae8e8"),
                    }}
                  >
                    Faculty Login
                  </Button>
                </a>
              </ButtonGroup>
            </Stack>
          </Flex>
        </Flex>
      </Box> */}
      <Box bg={useColorModeValue("#bae8e8")} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"center"}>
          <Box textColor={"#272343"}>
            <Image src={logo} w="80px" h="80px" alt="Logo" />
          </Box>
        </Flex>
      </Box>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <Box>
        <Hero />
      </Box>
    </>
  );
}

// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import Hero from "./Hero";
// import { Box } from "@chakra-ui/react";
// // import StudentLogin from "./StudentLogin";

// export default function LandingPage(props) {
//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg "
//         style={{ background: `#faeee7` }}
//       >
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             {props.title}
//           </Link>
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
//                   to="/studentlogin"
//                 >
//                   Student
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
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/about">
//                   {props.aboutText}
//                 </Link>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <Box>
//         <Hero />
//       </Box>
//     </>
//   );
// }

// LandingPage.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired,
// };

// LandingPage.defaultProps = {
//   title: "UIU Canteey",
//   aboutText: "About",
// };
