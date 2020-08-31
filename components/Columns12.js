import styled from "styled-components";

const Columns12Styles = styled.section`
  margin: 0 auto;
  padding: 40px 20px;
  max-width: 984px;

  article {
    width: 100%;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export default function Columns12({ children }) {
  return (
    <Columns12Styles>
      <article>{children}</article>
    </Columns12Styles>
  );
}
