import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const BeyondGlassStyle = styled.section`
  background: ${globals.white};
  padding: ${globals.sectionPadding};
  color: ${globals.black};
  canvas {
    height: 30rem !important;
  }

  h2 {
    width: 70%;
    margin-bottom: 2rem;
  }

  p {
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    > div {
      display: flex;
      align-items: center;
    }
    .text {
      max-width: 25rem;
    }
  }
`;
