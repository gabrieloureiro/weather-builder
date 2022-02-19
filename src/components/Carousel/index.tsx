import { FlexProps } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import * as C from "@chakra-ui/react";

const ArrowButton: React.FC<C.ButtonProps> = (props) => (
  <C.Button
    position="absolute"
    zIndex="1"
    width="41px"
    height="40px"
    borderRadius="50%"
    bg="gray.800"
    border="1px solid"
    borderColor="gray.600"
    color="yellow.400"
    boxShadow="md"
    {...props}
  />
);

interface CarouselProps extends FlexProps {
  show: number;
  children: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children, show }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const options = {
    slidesPerView: show,
    initial: 0,
    spacing: 15,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  };
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(options);

  const isEnd =
    typeof slider?.details().slidesPerView === "number" &&
    currentSlide === slider?.details().size - slider?.details().slidesPerView;

  const isBeginning = currentSlide === 0;

  return (
    <C.Flex alignItems="center" position="relative">
      {!isBeginning && (
        <ArrowButton onClick={() => slider.prev()} left="4px">
          &lt;
        </ArrowButton>
      )}
      {!isEnd && !!children && (
        <ArrowButton onClick={() => slider.next()} right="4px">
          &gt;
        </ArrowButton>
      )}
      <C.Box width="100%" className="keen-slider" ref={sliderRef}>
        {children?.map((child, i) => (
          <C.Box key={i} className="keen-slider__slide">
            {child}
          </C.Box>
        ))}
      </C.Box>
    </C.Flex>
  );
};

export default Carousel;
