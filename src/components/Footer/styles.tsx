import styled from "styled-components";
import { themes } from "../../styles/vars";

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  background: ${themes.light["ac-02"]};
  padding: 1rem 2rem;
  place-items: center;
`;

const FooterLogo = styled.img`
  max-width: 80px;
  border-radius: 100%;
`;

const FooterList = styled.ul`
  padding: 0;
  list-style-type: none;
  align-items: center;
  li {
    min-width: 10ch;
  }
  a {
    color: white;
  }
`;

const FooterListTitle = styled.li`
  border-bottom: white solid 2px;
  margin-bottom: 0.5rem;
`;

const FooterSocialContainer = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
`;

export {
  FooterContainer,
  FooterList,
  FooterLogo,
  FooterListTitle,
  FooterSocialContainer,
};
