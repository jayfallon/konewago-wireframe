import styled from "styled-components";

const PageSubTitleStyles = styled.h3`
  margin-bottom: 18px;
  font-size: 26px;
`;

export default function PageSubTitle({ children }) {
  return <PageSubTitleStyles>{children}</PageSubTitleStyles>;
}
