import PropTypes from "prop-types";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { StyledProductCardSlider } from "./StyledProductCardSlider";

function ProductCardSlider({ slides }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slideElements = slides?.map((slide, idx) => (
    <SwiperSlide key={idx}>
      <img src={slide} />
    </SwiperSlide>
  ));

  return (
    <StyledProductCardSlider>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, EffectFade]}
        effect={"fade"}
        className="main_slider"
      >
        {slideElements}
      </Swiper>
      <div className="gallery_wrapper">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={16}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="gallery_slider"
          navigation={{
            nextEl: ".gallery-swiper-button-next",
            prevEl: ".gallery-swiper-button-prev",
          }}
        >
          {slideElements}
        </Swiper>
        <button className="gallery-swiper-button-next"></button>
        <button className="gallery-swiper-button-prev"></button>
      </div>
    </StyledProductCardSlider>
  );
}

export default ProductCardSlider;

ProductCardSlider.propTypes = {
  slides: PropTypes.array,
};
