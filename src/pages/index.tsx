import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Banner } from "../components/Banner";
import { Traveltype } from "../components/Traveltype";
import { Continentslide } from "../components/Continentslide";

export default function Home() {
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      mx="auto"
      justifyContent="center"
      direction="column"
    >

      <Banner />

      <Box
        w="72.5rem"
        h="9.063rem"
        mx="auto"
        mt="5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between" 
      >
        <Traveltype src="cocktail.svg" title="vida noturna"/>
        <Traveltype src="surf.svg" title="praia"/>
        <Traveltype src="building.svg" title="moderno"/> 
        <Traveltype src="museum.svg" title="clássico"/> 
        <Traveltype src="earth.svg" title="e mais..."/> 

      </Box>

      <Center 
        width='5.625rem'
        marginTop="5rem"
        mx="auto"
        marginBottom="5rem"
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Divider 
          orientation='horizontal'
          border="2px"
          variant="solid"
        />
      </Center>

      <Box
        w="51.875rem"
        h="9.063rem"
        mx="auto"
      >
        <Text 
          align="center"
          fontSize="2.25rem"
          fontWeight="medium"
          fontStyle="normal"
          lineHeight="3.375rem"
          color="darkblue.Headings_and_Text"
        >
            Vamos nessa?
        </Text>
        
        <Text 
          align="center"
          fontSize="2.25rem"
          fontWeight="medium"
          fontStyle="normal"
          lineHeight="3.375rem"
          color="darkblue.Headings_and_Text"
        >
          Então escolha seu continente
        </Text>       
      </Box>

      <Box
        w="77.5rem"
        h="28.125rem"
        mx="auto"
        mb="5rem"
      >
        <Continentslide />

      </Box>

    </Flex>
  )
}
