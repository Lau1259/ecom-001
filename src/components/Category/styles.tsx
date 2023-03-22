import styled from "styled-components";
import { global, sizes, themes, typography } from "../../styles/vars";

type CategoryContainer = {
  bg?: string;
};

const CategoryContainer = styled.div<CategoryContainer>`
  display: grid;
  place-items: center;
  border-radius: ${global["border-radius"]};
  padding: ${global.padding};
  .img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    ${(props) =>
      props.bg
        ? `background: url('${props.bg}'); background-size: cover;`
        : "background: red"};
  }
  .title {
    font-size: 2rem;
    font-family: ${typography.fonts.title};
    font-weight: ${typography.weights.bold};
  }
  .description {
    font-weight: ${typography.weights.extraLight};
    padding-bottom: 1rem;
    border-bottom: ${themes.light.light} solid 2px;
  }
  .cta {
    background: ${themes.light["ac-01"]};
    color: ${themes.light.light};
    border-radius: ${global["border-radius"]};
    padding: 0.5rem 2.25rem;
    display: flex;
    width: fit-content;
    margin: 0 auto;
    margin-top: 1rem;
  }
  @media screen and (min-width: ${sizes.M}) {
    grid-template-columns: repeat(8, 1fr);
    .info {
      max-width: 75%;
    }
    &.left {
      text-align: left;
      .img {
        grid-column: 7/9;
        grid-row: 1;
      }
      .info {
        grid-column: 1/7;
        grid-row: 1;
        justify-self: flex-start;
      }
      .cta {
        margin: 0 0 auto 0;
        margin-top: 1rem;
      }
    }
    &.right {
      text-align: right;
      .img {
        grid-column: 1/3;
        grid-row: 1;
      }
      .info {
        grid-column: 3/9;
        grid-row: 1;
        justify-self: flex-end;
      }
      .cta {
        margin: 0 0 0 auto;
        margin-top: 1rem;
      }
    }
  }
`;

export { CategoryContainer };
