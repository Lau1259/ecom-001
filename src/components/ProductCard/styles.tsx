import styled, { keyframes } from "styled-components";
import { global, themes } from "../../styles/vars";

console.log(global["border-radius"]);

const glow1 = keyframes`
0% {
  box-shadow: 0px 0px 5px ${themes.light["ac-01"]};
  }
  30% {
    box-shadow: 0px 0px 20px ${themes.light["ac-01"]};
  }
  60% {
    box-shadow: 0px 0px 20px ${themes.light["ac-01"]};
  }
  100% {
    box-shadow: 0px 0px 5px ${themes.light["ac-01"]};
  }
`;

const ProductInfo = styled.div`
  position: relative;
  width: 100%;
  display: none;
  bottom: -100%;
  p {
    margin: 0;
    padding: 0;
  }
`;

const ProductCardContainer = styled.div`
  display: grid;
  border-radius: ${global["border-radius"]};
  overflow: hidden;
  background: ${themes.bw[100]};
  max-width: 300px;
  height: 375px;
  transition: 0.35;
  position: relative;
  img {
    width: 100%;
    margin: auto auto;
  }
  :hover,
  :focus {
    background: ${themes.bw[300]};
    animation: ${glow1} infinite 2s ease-out;
    font-weight: bold;
    cursor: pointer;
    ${ProductInfo} {
      display: grid;
      place-items: center;
      bottom: 0;
      background: ${themes.light["ac-01"]};
    }
  }
`;

export { ProductCardContainer, ProductInfo };
