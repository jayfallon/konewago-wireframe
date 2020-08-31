import styled from "styled-components";
import { padding, rem } from "polish";
import { Colors } from "../Theme";

const HeaderStyles = styled.header`
  background-color: ${Colors.white};
  ${padding("12px", "24px", "36px", "12px")};
  height: ${rem("80px")};
  border-bottom: ${rem("1px")} solid ${Colors.black};
`;

export default HeaderStyles;
