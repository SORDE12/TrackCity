import {
  Box,
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TransitList from "../Components/TransitList";

let getAndUpdateData = async () => {
  let data = await fetch("https://tender-cyan-cobra.cyclic.app/dashboard");
  let res = await data.json();
  return res;
};

const List = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    getAndUpdateData()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Flex
      justifyContent="space-around"
      flexDirection={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
      }}
    >
      <Box
        width={{
          base: "95%",
          sm: "95%",
          md: "20%",
          lg: "20%",
        }}
        height="auto"
        margin="auto"
        border="1px solid red"
        mt="20px"
      >
        <Flex my="20px" alignItems="center" justifyContent="center">
          <Image
            boxSize="50px"
            src="https://img.freepik.com/free-vector/location_53876-25530.jpg?w=2000"
          />
          <Link to="/dashboard">
            <Text>Map view</Text>
          </Link>
        </Flex>

        <Flex my="20px" alignItems="center" justifyContent="center">
          <Image
            boxSize="50px"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB9CAMAAABES7fdAAAAY1BMVEX////+/v4AAAD8/Py6urrr6+v39/ecnJwnJyc+Pj5LS0u2trY2NjaXl5fg4OAEBATOzs6np6ceHh5gYGDIyMjW1tYVFRXx8fFDQ0MwMDCwsLDBwcF+fn6Li4twcHBVVVVoaGhl9XaKAAAEiklEQVRoge2ai5aCKhSGNzfJcSAxScNLvf9THsCcmlIrI+ecs/xtLV0GfG6EzQaEiCyuCAggWFjkD6Boha7QFbpCV+gK/XdCZ+d7C9ppWWgHnpHnDShJuJJzMs6A9hUqN9iq7u/C8+/4ZahHMq11mmF8PFiq1FpG4aE3/8sj7iQhqrurgyCvPPhTlpLoSvkW432WZXsOERRHd2mxu+I6zVtQ5P4r1DG+0h5niXRCMm6gcFfaGvx9laSs06lm/RBqa/ML36hvshSXvU3NbZpmqtSH0KLEuDUXfdsG61qTPRCVZw8BbIPr5CeNsHnUaKEP3ykCjjG9ukFKV9yPH/IX9heV2Fylik54X7xhaem6Yko7Fa70IRu62z5ZRSkDtsXVXCi4eqOQ92/qiG5M+gVN+2QlgS/M51vqodR2EicsoIgxZ/eSsYXK0qfa4jg6Q4dLfs5Sir9ZYcWsSTHONvbw2pyPbLPZuuqNXKLCXKCzLL1A+75Bjredo9fPO6TBocDyYfXuAEESHjpe1F9A+xJX6ApdoVfQc3Q9nukjlhILpRPh7kcstUeLv8aDv9BQH5wAqX0EhJAckAsXgkKNZYGPwWqXh2+zO+3LIigUgfAW1vgcmd0FgE4ZC2ypjbawsKi2G1GidGCAcy0scEM6OWPaidTwidZ7ukzTloMiwdGDqc9HnMOfQB/p/wWdyhAW6mZq5ynaifZTp1/yM7mw/dSPaK7oInMOajxT0OotVOEsYYcummdqQHloaINj685Z7JjIDXBDkoGhFbZUOz3DuX+h9BDf6fsUhX6ndsZ4/MJbal+tM7UYkBvcA7de4yowsVeEDC9E+ocJ3U+NW4DwjnDUGwaHIkj1o3XPD0C7aHBZaO94loRC11QWh3Y3J8acTwXbdF9PrQKFdvi+6ebWR5DBPCg4FPQud77I+qVvZunpbkBNWDeIoHZe1zE3frTZLeLw7SVOLfPgmcAacaumceuGYd+pG0kxLtlE8g+EK/LwkBkaahuRLI9y0bjXDy1uI2INtlfoCg0IDegG4+hmsjSucBsH27h8Wocw0GpsW2RE8Zs7UCTGAoi6G8Umpd10MpltqVsY2+uJmhjJ1lx2WedA5QZnKn1NVYu7dcSZUAS52/LeviSbYTdVD09sxMt28xoU70v1xp64TwLdbvsrmp4HPAOd85UJGpnAPgt9FCqMpJ9qKP+5j6BW6ApdoSt0ha7QFXqBLi4CEXl2ahRKJLrdu1pC8Hrc9bam9wcj1geglye0kt3HJKjf4rtbh30UDk6KuS8woSrouUK09kU1/hsL3wK77RKkJK9lnlRCKyEbA8qf6Yw2qoWsuWKqNq1uOOU8MYKKSiWNYZConBsuBAXNwIgCeJGYpNIqaSNDKeVJouSMnsFobqqaKRUp2aRGapNLwVoDtZ2xCuCoVnmuHNQaqCul6sKeax7xlhvdRkxEr1exFHmVVkJVxmie5LIS9k6TKmXSVFc8FxXV2k99qaVaH0NtClowa73UlLnzp4T6jxQH5i4z2tK5J8OV8yC/z3D9z+UeOWcceo5O/wCpWWVkAU4FPwAAAABJRU5ErkJggg=="
          />
          <Link to="/list">
            <Text>List view</Text>
          </Link>
        </Flex>
      </Box>
      <Box
        width={{
          base: "95%",
          sm: "95%",
          md: "75%",
          lg: "75%",
        }}
        height="auto"
        margin="auto"
        mt="20px"
      >
        <TableContainer border="2px solid black">
          <Table variant="simple" border="1px solid black">
            <Thead>
              <Tr>
                <Th
                  backgroundColor="gray.100"
                  fontSize="20px"
                  textAlign="center"
                  border="1px solid black"
                >
                  City
                </Th>
                <Th
                  backgroundColor="gray.100"
                  fontSize="20px"
                  textAlign="center"
                  border="1px solid black"
                >
                  Location
                </Th>
                <Th
                  backgroundColor="gray.100"
                  fontSize="20px"
                  textAlign="center"
                  border="1px solid black"
                >
                  Project Name
                </Th>
                <Th
                  backgroundColor="gray.100"
                  fontSize="20px"
                  textAlign="center"
                  border="1px solid black"
                >
                  Coordinates
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((e) => (
                <TransitList key={e._id} data={e} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};

export default List;
