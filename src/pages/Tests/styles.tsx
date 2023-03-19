import styled from "styled-components";
import { global } from "../../styles/vars";

const CardContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: ${global.padding};
  place-items: center;
  @media screen and (min-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { CardContainer };
