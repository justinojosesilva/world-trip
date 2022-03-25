import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Citycard } from "../../components/Citycard";
import { Info } from "../../components/Info";

export default function Continent() {
    return (
        <Flex
            w="100%"
            maxWidth={1440}
            mx="auto"
            justifyContent="center"
            direction="column"
        >
            <Box
                w={1440}
                h={500}
                backgroundImage="../Europa_Banner.svg"
            >
                <Text
                    ml="8.75rem"
                    mt="23.063rem"


                    fontSize="3rem"
                    fontWeight="semibold"
                    lineHeight="4.5rem"
                    color="Light.Headings_and_Text"
                >
                   Europa
                </Text> 
            </Box>

            <Box
                ml="8.75rem"
                mr="8.75rem"
                mt="5rem"
                mb="5rem"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box
                    w="37.5rem"
                    h="13.188rem"
                    mr="4.375rem"
                >
                    <Text
                        fontSize="1.5rem"
                        fontWeight="normal"
                        lineHeight="2.25rem"
                        align="justify"
                        color="Dark.Headings_and_Text"
                    >
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste   
                    </Text> 
                </Box>

                <Box
                    w="37.5rem"
                    h="13.188rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Info number={50} info="países" />
                    <Info number={60} info="línguas" />
                    <Info number={27} info="cidades +100" />
                </Box>
            </Box>

            <Box
                ml="8.75rem"
                mr="8.75rem"
                mb="2.5rem"
            >
                <Text>Cidades +100</Text>

                <SimpleGrid columns={4} spacing='2.813rem'>
                    
                    <Citycard city="Londres" country="Reino Unido" image="../citys/londres.svg" avatar="../flags/Ingraterra.svg"/>
                    <Citycard city="Paris" country="França" image="../citys/paris.svg" avatar="../flags/franca.svg"/>
                    <Citycard city="Roma" country="Itália" image="../citys/roma.svg" avatar="../flags/italia.svg"/>
                    <Citycard city="Praga" country="República Tcheca" image="../citys/praga.svg" avatar="../flags/republicatcheca.svg"/>
                    <Citycard city="Amsterdã" country="Holanda" image="../citys/amsterda.svg" avatar="../flags/holanda.svg"/>
                   

                    

                </SimpleGrid>
                
            </Box>
        </Flex>
    );
}