"use client";
import { Carousel as CarouselMT, IconButton } from "@material-tailwind/react";
import Link from "next/link";

interface Data {
  imgSrc: string;
  desc?: string;
  href?: string;
}

interface CarouselProps {
  data: Data[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <CarouselMT
      placeholder={""}
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          placeholder={""}
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <img
            src="/img/Arrows/orange-arrow.webp"
            className="rotate-180"
          />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          placeholder={""}
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <img src="/img/Arrows/orange-arrow.webp" />
        </IconButton>
      )}
    >
      {data.map((el, i) => {
        return (
          <div key={crypto.randomUUID()}>
            <img
              src={el.imgSrc}
              alt={`image ${i}`}
              className="mx-auto object-cover rounded-full shadow-carousel mb-6"
            />
            {el.href ? (
              <Link href={el.href} className="hover:text-accent">
                <span className="text-xl font-semibold">{el.desc}</span>
              </Link>
            ) : (
              <span className="text-xl font-semibold">{el.desc}</span>
            )}
          </div>
        );
      })}
    </CarouselMT>
  );
};

export default Carousel;
