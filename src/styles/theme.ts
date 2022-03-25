import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        "Highligh": "#FFBA08",
        "Highlight_50": "#FFBA08",
        Dark: {
            "Black": "#000000",
            "Headings_and_Text": "#47585B",
            "Info": "#999999",
            "Info_50%": "#999999",
        },
        Light: {
            "White": "#FFFFFF",
            "Headings_and_Text": "#F5F8FA",
            "Info": "#DADADA"
        }
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
    styles: {
        global: {
            body: {
                bg: "Light.Headings_and_Text",
                color: "Dark.Headings_and_Text"
            },           

        }
    }
})