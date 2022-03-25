import { Avatar, Box, Image, Text } from "@chakra-ui/react";

interface CitycardProps {
    image: string;
    avatar: string;
    country: string;
    city: string;
}

export function Citycard({avatar,city,image,country}: CitycardProps) {
    return (
        <Box
            w="16rem"
            h="17.438rem"
        >
            <Image 
                w="16rem"
                h="10.813rem"  
                alt="Airplane" 
                src={image}
            />

            <Box
                w="16rem"
                h="6.625rem"
                borderLeft="1px"
                borderRight="1px"
                borderBottom="1px"
                borderRadius="0.25rem"
                borderColor="Highlight_50"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box
                    ml="1.5rem"
                >
                    <Text
                        mb="0.75rem"
                        fontFamily="Barlow"
                        fontStyle="normal"
                        fontWeight="semibold"
                        fontSize="1.75rem"
                        lineHeight="1.563rem"
                        color="Dark.Headings_and_Text"
                    >
                        {city}
                    </Text>
                    <Text
                        fontFamily="Barlow"
                        fontStyle="normal"
                        fontWeight="medium"
                        fontSize="1rem"
                        lineHeight="1.625rem"
                        color="Dark.Info"
                    >
                        {country}
                    </Text>
                </Box>

                <Box
                    mr="1.5rem"
                >
                    <Avatar w="1.875rem" h="1.875rem" src={avatar}/>
                </Box>

            </Box>       

        </Box>
    );
}