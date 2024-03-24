import styled from "styled-components";
import chevron from "../../assets/ChevronDown.svg";

export const StyledProductCardSlider = styled.div`
  max-width: 524px;

  .main_slider {
    width: 100%;
    height: 368px;
    margin-bottom: 32px;
  }

  .gallery_slider {
    width: calc(100% - 78px);
    height: 98px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gallery_wrapper {
    position: relative;
  }

  .gallery-swiper-button-next,
  .gallery-swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 39px;
    height: 39px;
    background-image: url(${chevron});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .gallery-swiper-button-next {
    transform: translateY(-50%) rotate(-90deg);
    right: 0;
  }

  .gallery-swiper-button-prev {
    transform: translateY(-50%) rotate(90deg);
    left: 0;
  }
`;
