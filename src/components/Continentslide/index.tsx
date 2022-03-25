import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import { Box, Image, Text } from "@chakra-ui/react";

export function Continentslide() {

    // import required modules
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >

                    <Box
                        w="77.5rem"
                        h="28.125rem"
                        backgroundImage="Europa.svg"
                        mx="auto"
                        display="flex"
                        flexDir="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text
                            align="center"
                            fontWeight="bold"
                            fontStyle="normal"
                            fontSize="3rem"
                            lineHeight="4.5rem"
                            color="Light.Headings_and_Text"
                        >
                            Europa
                        </Text>
                        <Text
                            align="center"
                            fontWeight="bold"
                            fontStyle="normal"
                            fontSize="1.5rem"
                            lineHeight="2.25rem"
                            color="Light.Info"
                        >
                            O continente mais antigo.
                        </Text>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
         </>
    );
}