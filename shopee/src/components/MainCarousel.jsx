import { Box, Center, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import Carousel from "./Carousel";
export function MainCarousel(props) {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Center>
      <Flex>
        <Flex>
          <Image src="https://via.placeholder.com/150" />
          <Image src="https://via.placeholder.com/150" />
        </Flex>
      </Flex>
    </Center>
  );
}
