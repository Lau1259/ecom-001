import styled from "styled-components";
import { themes, typography } from "../../styles/vars";

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  background: #0ba8ee;
  padding: 1rem 2rem;
`;

const NavLogo = styled.img`
  max-width: 80px;
  border-radius: 100%;
  background: white;
`;

const NavListContainer = styled.nav`
  display: flex;
  align-items: space-around;
  justify-content: flex-end;
  ul {
    padding: 0;
    display: flex;
    list-style-type: none;
    align-items: center;
    li {
      min-width: 10ch;
    }
    a {
      color: ${themes.light["light"]};
      font-size: 1.25rem;
      font-weight: ${typography.weights.regular};
      &.active {
        color: ${themes.light["col-1"]};
        font-weight: ${typography.weights.bold};
      }
    }
  }
`;

export { NavContainer, NavLogo, NavListContainer };
