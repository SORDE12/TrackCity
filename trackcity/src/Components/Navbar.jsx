import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import env from "../Images/env.jpg";
import { Link } from "react-router-dom";

const Links = [
  { link: "Home", path: "/" },
  { link: "Add City Details", path: "/addcity" },
  { link: "Dashboard", path: "/dashboard" },
];

const NavLink = ({ link, path }) => (
  <Link to={path}>
    <Text
      px={2}
      fontSize="18px"
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
        color: "#008000",
      }}
    >
      {link}
    </Text>
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">
                <Image height="50px" width="100px" src={env} />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((e) => (
                <NavLink link={e.link} path={e.path} key={e.link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link to="/login">
              <Button
                borderRadius="15px"
                border="1px solid #008000 "
                fontSize="18px"
              >
                {login ? "Logout" : "Login"}
              </Button>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((e) => (
                <Link to={e.path}>
                  <NavLink link={e.link} path={e.path} key={e.link} />
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
