import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const NumbersStyle = styled.section`
  background: ${globals.white};
  h2 {
    padding: 4rem ${globals.sectionPadding} 0;
  }

  .numbers {
    display: flex;
    margin-top: 3rem;
    gap: 0rem;
    overflow-x: scroll;
    padding-bottom: 4rem;

    &::-webkit-scrollbar {
      height: 0;
    }

    > div {
      margin-right: ${globals.sectionPadding};
      min-width: 10rem;
      b {
        font-size: 5rem;
        position: relative;
        z-index: 2;
      }
      p {
        position: relative;
        z-index: 1;
        font-size: 1.2rem;
        &:before {
          content: "";
          position: absolute;
          background: ${globals.gold};
          border-radius: 200px;
          height: 3rem;
          width: 3rem;
          z-index: -1;
          top: -0.3rem;
          left: -1rem;
        }
      }

      &:nth-child(1) {
        margin-left: ${globals.sectionPadding};
      }
    }
  }

  @media (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 6rem;
  }
`;
