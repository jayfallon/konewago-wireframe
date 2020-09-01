import styled from "styled-components";

const ImageHeroStyles = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 600px;
`;

export default function ImageHero({ image }) {
  return (
    <ImageHeroStyles
      style={{ backgroundImage: `url(images/${image})` }}></ImageHeroStyles>
  );
}
