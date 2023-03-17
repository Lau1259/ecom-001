import styled from "styled-components";

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  background: #0ba8ee;
  padding: 1rem 2rem;
`;

const NavLogo = styled.img`
  max-width: 100px;
  border-radius: 100%;
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
      color: white;
    }
  }
`;

export { NavContainer, NavLogo, NavListContainer };
