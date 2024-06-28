
import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel
      className="rounded-xl h-max md:h-3/4 md:w-1/2 lg:w-2/5 mx-auto"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
              onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      )} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <img
        src="1.jpg"
        alt="image 1"
        className="h-full w-full object-contain rounded-xl"
      />
      <img
        src="2.jpg"
        alt="image 2"
        className="h-full w-full object-contain rounded-xl"
      />
      <img
        src="3.jpg"
        alt="image 3"
        className="h-full w-full object-contain rounded-xl"
      />
      <img
        src="4.jpg"
        alt="image 3"
        className="h-full w-full object-contain rounded-xl"
      />
    </Carousel>
  );
}