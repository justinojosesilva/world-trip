import {  Box, Center, Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1440}
            mx="auto"
            h="100"
            align="center"
            justifyContent="center" 
        >
            <Image 
                boxSize='150px'  
                alt="World Trip" 
                src="../Logo.svg" 
            />   
        </Flex>
    );
}