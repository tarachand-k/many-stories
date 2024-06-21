import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { useSwiper } from "swiper/react";

const Btn = styled.button`
  font-size: 1.5rem;
  padding: 6px;
  border-radius: 2px;
  background-color: var(--text-color-dark);
  cursor: pointer;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;

  align-items: center;
  justify-content: center;

  & > svg {
    color: var(--text-color-light);
  }

  &:nth-of-type(1) {
    left: 8px;
    padding-left: 4px;
  }

  &:nth-of-type(2) {
    right: 8px;
    padding-right
  }
`;

function SwiperNavButtons({ autoScroll = false }) {
  const swiper = useSwiper();

  useEffect(() => {
    if (!autoScroll) return;
    const sliderInterval = setInterval(() => {
      swiper.slideNext();
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, [swiper, autoScroll]);

  return (
    <>
      <Btn onClick={() => swiper.slidePrev()}>
        <FaChevronLeft />
      </Btn>
      <Btn onClick={() => swiper.slideNext()}>
        <FaChevronRight />
      </Btn>
    </>
  );
}

export default SwiperNavButtons;
