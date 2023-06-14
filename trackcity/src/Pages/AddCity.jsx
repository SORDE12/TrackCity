import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

let initialState = {
  city: "",
  location: "",
  project: "",
  latitude: "",
  longitude: "",
};

const AddCity = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const toast = useToast();
  const [cityState, setCityState] = useState(initialState);

  let handleChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setCityState({ ...cityState, [e.target.name]: val });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const { city, location, project, latitude, longitude } = cityState;
    console.log(cityState);
    if (
      city === "" ||
      location === "" ||
      project === "" ||
      latitude === "" ||
      longitude === ""
    ) {
      toast({
        title: "Please enter all data",
        description: "Not added details to all Inputs",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setCityState({
        ...cityState,
        city: "",
        location: "",
        project: "",
        latitude: "",
        longitude: "",
      });
    } else {
      fetch("https://tender-cyan-cobra.cyclic.app/addcity", {
        method: "POST",
        body: JSON.stringify(cityState),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          toast({
            title: `added city details successfully`,
            description: `added city details successfully`,
            status: "success",
            duration: 6000,
            isClosable: true,
            position: "top",
          });
          setCityState({
            ...cityState,
            city: "",
            location: "",
            project: "",
            latitude: "",
            longitude: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const { city, location, project, latitude, longitude } = cityState;

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

        <form onSubmit={handleSubmit} mt="25px">
          <label style={{ fontSize: "20px" }}> CITY</label>
          <Select
            placeholder="Select City"
            name="city"
            value={city}
            onChange={handleChange}
            color="#697b91"
          >
            <option value="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
            <option value="nashik">Nashik</option>
            <option value="aurangabad">Aurangabad</option>
            <option value="nagpur">nagpur</option>
          </Select>
          <br />
          <br />
          <label style={{ fontSize: "20px" }}> LOCATION</label>
          <Select
            placeholder="Select Location"
            name="location"
            value={location}
            onChange={handleChange}
            color="#697b91"
          >
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
              name="project"
              type="text"
              placeholder="Enter project Name"
              value={project}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <Flex
            justifyContent="space-between"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <label style={{ fontSize: "20px" }}>
              {" "}
              LATITUDE
              <Input
                name="latitude"
                type="number"
                placeholder="Project Latitude"
                value={latitude}
                onChange={handleChange}
              />
            </label>
            <label style={{ fontSize: "20px" }}>
              {" "}
              LONGITUDE
              <Input
                name="longitude"
                type="number"
                placeholder="Project Longitude"
                value={longitude}
                onChange={handleChange}
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

export default AddCity;
