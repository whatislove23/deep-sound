import PropTypes from "prop-types";

import { StyledHero, StyledHeroWrapper, StyledHeroBtn } from "./StyledHero.styled";
import videoMp4 from "../../assets/video/headphone.mp4";
import videoWebm from "../../assets/video/headphone.webm"
import videoOgv from "../../assets/video/headphone.ogv";

function Hero({title, link}) {
  return (
    <StyledHero>
      <video
        autoPlay
        muted
      >
        <source
          src={videoMp4}
          type="video/mp4"
        />
        <source
          src={videoOgv}
          type="video/ogv"
        />
        <source
          src={videoWebm}
          type="video/webm"
        />
      </video>
      <StyledHeroWrapper>
        <h1 className='sr-only'>Deep Sound</h1>
        <h2>{title.replace(/\s/, "\n")}</h2>
        <StyledHeroBtn to={link}>Learn More</StyledHeroBtn>
      </StyledHeroWrapper>
    </StyledHero>
  );
}

export default Hero;

Hero.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};
