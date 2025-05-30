import { useEffect, useState } from "react";
import useImagePreloader from "../../Hooks/useImagePreload";

// List of images and captions to display in the slideshow
const slides = [
  {
    image: "/slideshow-pictures/decaf-fa24/IMG_3802.webp",
    caption: "Disciplines of Engineering Career Fair Fall 2024"
  },
  {
    image: "/slideshow-pictures/eotg-wi25/IMG_4351.webp",
    caption: "Engineers on the Green Winter 2025"
  },
  {
    image: "/slideshow-pictures/eotg-wi25/IMG_4354.webp",
    caption: "Engineers on the Green Winter 2025"
  },
  {
    image: "/slideshow-pictures/council-dirty-birds-social/20250117_184343.webp",
    caption: "TESC Council Social Winter 2025"
  },
  {
    image: "/slideshow-pictures/council-dirty-birds-social/20250117_184426.webp",
    caption: "TESC Council Social Winter 2025"
  },
  {
    image: "/slideshow-pictures/decaf-wi25/IMG_4427_25.webp",
    caption: "Disciplines of Engineering Career Fair Winter 2025"
  }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const firstSlidePreloader = useImagePreloader([slides[0].image]);
  const remainingSlidePreloader = useImagePreloader(slides.slice(1).map((slide) => slide.image));
  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };
  const dotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!remainingSlidePreloader.imagesPreloaded) return;
    const intervalID = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => {
      clearInterval(intervalID);
    };
  });
  return (
    <div className="max-w-screen  h-[80vh] relative overflow-x-hidden m-0">
      <div
        className="w-screen h-full relative duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        <div className="absolute w-full h-full">
          {firstSlidePreloader.imagesPreloaded && (
            <img
              srcSet={slides[0].image}
              alt=""
              className="w-full h-full object-cover object-[25%_35%] animate-[slide-animate-in_1s]"
            />
          )}
          <img
            srcSet="/slideshow-pictures/decaf-fa24/IMG_3802_small.webp"
            alt=""
            className="-z-1 absolute top-0 left-0 w-full h-full object-cover object-[25%_35%] animate-[soft-pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]"
          />
        </div>

        {remainingSlidePreloader.imagesPreloaded &&
          slides.slice(1).map((slide, index) => {
            return (
              <div
                className="absolute w-full h-full"
                style={{
                  left: `${(index + 1) * 100}vw`
                }}
                key={index}
              >
                <img
                  srcSet={slide.image}
                  alt=""
                  className="w-full h-full object-cover  object-[25%_35%]"
                />
              </div>
            );
          })}
      </div>

      {remainingSlidePreloader.imagesPreloaded && (
        <div className="w-[100%] flex items-center justify-center mt-[2vw] absolute bottom-0 animate-[animate-in_1s]">
          <button
            className="flex m-0 h-min cursor-pointer my-0 text-[8vh] bg-none border-none text-white px-[15px] pb-0 "
            onClick={goToPrevSlide}
          >
            &lt;
          </button>

          <div className="flex align-center mt-[8px]">
            {slides.map((_, index) => (
              <span
                key={index}
                className="h-[2vh] mx-[5px] my-0 bg-white rounded-standard  cursor-pointer duration-500"
                style={{
                  backgroundColor: `${index === currentIndex ? "var(--color-navy)" : ""}`,
                  width: `${index === currentIndex ? "4vh" : "2vh"}`
                }}
                onClick={() => dotClick(index)}
              ></span>
            ))}
          </div>
          <button
            className="flex cursor-pointer m-0 h-min text-[8vh] bg-none border-none text-white px-[15px] pb-0 "
            onClick={goToNextSlide}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
