import { HashLink } from "react-router-hash-link";
import Container from "../Container/Container";
import { StyledHero } from "./StyledHero.styled";

function Hero() {
  return (
    <StyledHero>
      <Container>
        <h1 style={{ marginTop: "100px" }}>HERO SECTION</h1>
        <HashLink smooth to="/#footer" style={{ fontSize: "28px" }}>

          to Footer...1234 vlad 122333 hello vercel
        </HashLink>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          odit labore? Consequatur dicta magnam enim asperiores voluptatum,
          eveniet debitis provident praesentium natus vitae, accusamus ullam
          incidunt aliquam quos in perspiciatis. Dolorem nobis architecto neque
          corrupti voluptatibus ipsum officiis quisquam. Expedita non minus a
          quod reprehenderit culpa sequi praesentium doloremque saepe blanditiis
          modi dolores architecto liberodasdasdasd2222 velit laboriosam tenetur,
          quo quasi? Numquam ex pariatur corporis mollitia ad quis fugiat facere
          consequatur enim tenetur. Quod ullam debitis sunt maxime sapiente,
          aliquam eius? Eos nemo hic, reiciendis in perspiciatis dolorum totam
          facilis assumenda? Dicta facere aperiam vitae aliquam! Necessitatibus
          dolore veritatis quae harum voluptate, mollitia earum magni debitis
          quisquam repudiandae, recusandae dolorem illo eos aspernatur vero
          molestiae consequatur sequi quos quam nihil accusamus! Itaque maiores
          iste odit suscipit esse harum beatae inventore consequuntur debitis
          sapiente est accusamus explicabo quibusdam culpa dicta saepe odio,
          libero voluptatibus architecto amet optio expedita quae illo magnam.
          Voluptas.
        </p>
      </Container>
    </StyledHero>
  );
}

export default Hero;
