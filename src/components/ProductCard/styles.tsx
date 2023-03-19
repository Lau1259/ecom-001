import styled, { keyframes } from "styled-components";
import { global, themes } from "../../styles/vars";

console.log(global["border-radius"]);

const glow1 = keyframes`
0% {
  box-shadow: -2px -2px 15px ${themes.light["ac-01"]};
  }
20% {
  box-shadow: 2px -2px 15px ${themes.light["ac-01"]};
  }

  30% {
    box-shadow: 2px 2px 15px ${themes.light["ac-01"]};
  }
  60% {
    box-shadow: -2px 2px 15px ${themes.light["ac-01"]};
  }
  100% {
    box-shadow: -2px -2px 15px ${themes.light["ac-01"]};
  }
`;

const ProductCardContainer = styled.div`
  display: grid;
  border-radius: ${global["border-radius"]};
  overflow: hidden;
  background: rgba(250, 250, 250, 0.35);
  max-width: 300px;
  transition: 0.35;
  img {
    width: 100%;
  }
  :hover {
    background: ${themes.light["ac-01"]};
    animation: ${glow1} infinite 6s ease-in-out;
    font-weight: bold;
    cursor: pointer;
    img {
      background: ${themes.light.light};
    }
  }
`;

export { ProductCardContainer };
