import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const BeyondGlassStyle = styled.section`
  background: ${globals.white};
  padding: ${globals.sectionPadding};
  color: ${globals.black};
  position: relative;
  user-select: none;
  canvas {
    height: 30rem !important;
  }

  .instructions {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, calc(-50% - 8rem));
    border-radius: 19px;
    background: rgba(217, 217, 217, 0.1);

    box-shadow: -19.233px 19.233px 19.233px 0px rgba(255, 255, 255, 0.1) inset,
      19.233px -19.233px 19.233px 0px rgba(165, 165, 165, 0.1) inset;
    backdrop-filter: blur(19.233333587646484px);
    padding: 5rem;
    width: 80%;
    max-width: 25rem;

    h3 {
      font-weight: 900;
      font-size: 1.6rem;
      text-align: center;
    }
  }
  h2 {
    width: 70%;
    margin-bottom: 2rem;
  }

  p {
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    .instructions {
      transform: translate(calc(-50% - 13rem), -50%);
    }
    > div {
      display: flex;
      align-items: center;
    }
    .text {
      max-width: 25rem;
    }
  }
`;
