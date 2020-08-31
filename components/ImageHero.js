import styled from "styled-components";

const ImageHeroStyles = styled.section`
  background-image: url(/images/${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 600px;
`;

export default function ImageHero({ image }) {
  return (
    <ImageHero>
      <p>hello </p>
    </ImageHero>
  );
}
