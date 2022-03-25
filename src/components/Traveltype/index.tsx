import { Box, Image, Text } from "@chakra-ui/react";

interface TraveltypeProps {
    title: string;
    src: string;
}

export function Traveltype ({src, title}: TraveltypeProps) {
    return (
        <Box
          align="center"
        >
          <Image 
              boxSize='5.313rem'  
              alt={title} 
              src={src} 
          />
          <Text 
              fontSize='1.25rem'
              fontWeight="semibold"
              fontStyle="normal"
              lineHeight="2.25rem"
              color="Dark.Headings_and_Text"
          >
            {title}
          </Text>  
        </Box>        
    );
}