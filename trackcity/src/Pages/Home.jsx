import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box>
      <br />
      <br />
      <Heading>Welcome to Track City Project</Heading>
      <br />

      <SimpleGrid width="100%"  columns={{ base: 1, sm: 1, md: 2, lg: 2 }} gap="20px">
        <Image height="100%" width="100%" src="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_1280.jpg" />
        <Image height="100%"  width="100%" src="https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_1280.jpg" />
        <Image height="100%" width="100%" src="https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_1280.jpg" />
        <Image height="100%" width="100%" src="https://cdn.pixabay.com/photo/2014/08/28/11/01/map-of-the-world-429784_1280.jpg" />
      </SimpleGrid>
    </Box>
  );
};

export default Home;
