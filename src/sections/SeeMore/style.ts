import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const SeeMoreStyle = styled.section`
  background: ${globals.black};
  color: ${globals.white};
  overflow-x: hidden;
  width: 100%;
  position: relative;
  .see-more-big {
    display: none;
  }
  .small {
    width: 25rem;
    right: 0;
    transform: translateX(30%);
    position: absolute;
    height: auto;
    z-index: 0;
  }
  .text {
    max-width: 60%;
    z-index: 1;
    position: relative;
    padding: 4rem ${globals.sectionPadding};
    p {
      margin: 2rem 0 2.5rem;
    }
  }

  @media (min-width: 768px) {
    .small {
      display: none;
    }
    .big {
      position: absolute;
      height: auto;
      width: 100%;
      left: 0;
      right: unset;
      transform: translateX(00%);
    }
    .text {
      margin-left: auto;
    }
  }
`;
