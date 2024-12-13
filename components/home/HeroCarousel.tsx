import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";

const carouselImages = [hero1, hero2, hero3, hero4];

const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {carouselImages.map((image, index) => {
          return (
            <CarouselItem key={index}>
              <Image
                src={image}
                alt="hero"
                className="w-full h-[24rem] rounded-md object-cover"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-800 p-2 rounded-full" />
      <CarouselNext className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-800 p-2 rounded-full" />
    </Carousel>
  );
};
export default HeroCarousel;
