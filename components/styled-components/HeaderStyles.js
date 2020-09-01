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

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      display: flex;
      li {
        font-size: 1.8rem;
        a {
          padding: 12px;
          color: ${Colors.black};
          &.active {
            background-color: ${Colors.greenyellow};
          }
        }
      }
    }
    div.button--cta {
      margin-left: 12px;
      a {
        background-color: ${Colors.black};
        padding: 12px;
        color: ${Colors.white};
        font-size: 1.8rem;
      }
    }
  }
`;

export default HeaderStyles;
