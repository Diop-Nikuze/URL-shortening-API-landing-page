import { Box, HStack, Image, Link } from "@chakra-ui/react";
import logo from "../../images/logo.svg";

const HeaderNav = () => {
  return (
    <HStack
      justifyContent="space-between"
      py={5}
      w="1024px"
      maxW="90%"
      m="0 auto"
      color="hsl(257, 7%, 63%)"
      fontSize="15px"
    >
      <HStack>
        <Box className="logo" mr={10}>
          <Image src={logo} alt="logo"></Image>
        </Box>
        <Box>
          <Link
            href="#"
            mr={7}
            _hover={{ textDecor: "none", color: "hsl(260, 8%, 14%)" }}
          >
            Features
          </Link>
          <Link
            href="#"
            mr={7}
            _hover={{ textDecor: "none", color: "hsl(260, 8%, 14%)" }}
          >
            Pricing
          </Link>
          <Link
            href="#"
            _hover={{ textDecor: "none", color: "hsl(260, 8%, 14%)" }}
          >
            {" "}
            Resources
          </Link>
        </Box>
      </HStack>
      <Box>
        <Link
          href="#"
          mr={7}
          _hover={{ textDecor: "none", color: "hsl(260, 8%, 14%)" }}
        >
          Login
        </Link>
        <Link
          href="#"
          borderRadius="full"
          bgColor=" hsl(180, 66%, 49%)"
          py={1.5}
          px={4}
          color="white"
          _hover={{ textDecor: "none", opacity: "0.6" }}
        >
          Sign Up
        </Link>
      </Box>
    </HStack>
  );
};

export default HeaderNav;
