import styled from "styled-components";
import { padding, rem, size, position } from "polished";
import { Colors } from "../Theme";

const HeaderStyles = styled.header`
  background-color: ${Colors.white};
  padding: 12px 12px;
  width: 100%;
  min-height: 80px;
  border-bottom: 1px solid ${Colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 200;
  h1 {
    font-size: 30px;
  }
  nav ul {
    display: flex;
    li {
      padding: 12px;
      font-size: 1.8rem;
      &.button--ctm {
        a {
          background-color: ${Colors.black};
          padding: 6px 12px;
          color: ${Colors.white};
        }
      }
      a {
        color: ${Colors.black};
      }
    }
  }
`;

export default HeaderStyles;
