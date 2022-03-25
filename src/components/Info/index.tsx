import { Box, Text } from "@chakra-ui/react";

interface InfoProps {
    number: number;
    info: string;
}

export function Info({number, info}: InfoProps) {
    return (
        <Box
            w="6.125rem"
            h="6.188rem"
        >
            <Text
                fontStyle="normal"
                fontWeight="semibold"
                fontSize="3rem"
                lineHeight="4.5rem"
                align="center"
                color="Highligh"
            >
                {number}
            </Text>
            <Text
                fontStyle="normal"
                fontWeight="semibold"
                fontSize="1.5rem"
                lineHeight="2.25rem"
                align="center"
                color="Dark.Headings_and_Text"
            >
                {info}
            </Text>
        </Box>
    );
}