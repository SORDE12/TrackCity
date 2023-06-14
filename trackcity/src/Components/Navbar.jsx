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
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import env from "../Images/env.jpg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Pages/Login";

const Links = [
  { link: "Home", path: "/" },
  { link: "Add City Details", path: "/addcity" },
  { link: "Dashboard", path: "/dashboard" },
];

const Links1 = [
  { link: "Home", path: "/" },
  { link: "Add City Details", path: "/" },
  { link: "Dashboard", path: "/" },
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
  const { isAuthenticated } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);
  const toast = useToast();

  let handleClick = () => {
    console.log("Ok");
  };

  return (
    <>
      <Box width="98%" margin="auto" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
              {isAuthenticated
                ? Links.map((e) => (
                    <NavLink link={e.link} path={e.path} key={e.link} />
                  ))
                : Links1.map((e) => (
                    <NavLink link={e.link} path={e.path} key={e.link} />
                  ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Login />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {isAuthenticated
                ? Links.map((e) => (
                    <NavLink link={e.link} path={e.path} key={e.link} />
                  ))
                : Links1.map((e) => (
                    <NavLink link={e.link} path={e.path} key={e.link} />
                  ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
