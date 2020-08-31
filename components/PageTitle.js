import styled from "styled-components";

const PageTitleStyles = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
`;

export default function PageTitle({ children }) {
  return <PageTitleStyles>{children}</PageTitleStyles>;
}
