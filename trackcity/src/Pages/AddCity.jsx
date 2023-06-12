import { Box, Center, Flex, Heading, Input, Select, useToast } from "@chakra-ui/react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const AddCity = () => {
  const { isAuthenticated} = useAuth0()
  const navigate=useNavigate()
  const toast=useToast()

  if(!isAuthenticated){
    toast({
      title: "Not Logged in",
      description: "You have to login first",
      status: "error",
      duration: 6000,
      isClosable: true,
    });
   navigate("/")

  }else{
    return (
      <Box
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <Box
          m="auto"
          padding="25px"
          width={{ base: "80%", sm: "80%", md: "60%", lg: "50%" }}
          color="white"
        >
          <Heading m="20px">Add City Details</Heading>
          <form mt="25px">
            <label style={{ fontSize: "20px" }}> CITY</label>
            <Select placeholder="Select City" color="#697b91">
              <option value="pune">Pune</option>
              <option value="mumbai">Mumbai</option>
              <option value="nashik">Nashik</option>
              <option value="aurangabad">Aurangabad</option>
              <option value="nagpur">nagpur</option>
            </Select>
            <br />
            <br />
            <label style={{ fontSize: "20px" }}> LOCATION</label>
            <Select placeholder="Select Location" color="#697b91">
              <option value="khadki">Khadki</option>
              <option value="pimpri">Pimple Saudagar</option>
              <option value="akrudi">Hinjewadi</option>
              <option value="wagholi">Wagholi</option>
              <option value="talegaon">Talegaon</option>
            </Select>
            <br />
            <br />
            <label style={{ fontSize: "20px" }}>
              {" "}
              PROJECT NAME
              <Input
                name="projectname"
                type="text"
                placeholder="Enter project Name"
              />
            </label>
            <br />
            <br />
            <Flex justifyContent="space-between">
              <label style={{ fontSize: "20px" }}>
                {" "}
                LATITUDE
                <Input
                  name="latitude"
                  type="number"
                  placeholder="Project Latitude"
                />
              </label>
              <label style={{ fontSize: "20px" }}>
                {" "}
                LONGITUDE
                <Input
                  name="longitude"
                  type="number"
                  placeholder="Project Longitude"
                />
              </label>
              <br />
              <br />
            </Flex>
            <br />
            <br />
            <Input
              color="white"
              backgroundColor="green"
              type="submit"
              value="submit"
              width="50%"
              fontSize="20px"
            />
          </form>
        </Box>
      </Box>
    );
  };
  }
  

export default AddCity;
