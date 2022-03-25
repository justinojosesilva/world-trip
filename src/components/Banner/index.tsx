import { Box, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Box
            w="90rem"
            h="23.013rem"
            backgroundImage="/BG_Banner.svg"
            backgroundRepeat="no-repeat"
            display="flex"
            justifyContent="space-between"
            
            pl="8.75rem"
            pr="8.75rem"
        >
            <Box
                pt="5rem"         
            >
                <Stack spacing={3}>
                    <Text 
                        fontSize='2.25rem'
                        fontWeight="medium"
                        fontStyle="normal"
                        lineHeight="3.375rem"
                        color="Light.Headings_and_Text"
                    >
                        5 Continentes, infinitas possibilidades.
                    </Text>

                    <Text 
                        fontSize='1.25rem'
                        fontWeight="normal"
                        fontStyle="normal"
                        lineHeight="1.875rem"
                        color="Light.Info"
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Stack>
            
            </Box>
            <Box
                pt="1rem"
                ml="6rem"
            >
                <Image 
                    boxSize='26.072rem'  
                    alt="Airplane" 
                    src="Airplane.svg" 
                />  
            </Box>
        </Box>
    );
}