import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

const TransitList = ({data}) => {

    const {city,location,project,latitude,longitude}=data

  return (
    <Tr>
        <Td textAlign="center" border="1px solid black" >{city}</Td>
        <Td textAlign="center" border="1px solid black" >{location}</Td>
        <Td textAlign="center" border="1px solid black">{project}</Td>
        <Td textAlign="center" border="1px solid black" ><p>{latitude}</p> <p>{longitude}</p> </Td>
      </Tr>
  )
}

export default TransitList
