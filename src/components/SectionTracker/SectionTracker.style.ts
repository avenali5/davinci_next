import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const SectionTrackerStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  span {
    color: ${globals.gold};
    mix-blend-mode: exclusion;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .line {
    width: 100%;
    height: 2px;
    background: #d1b05e50;
    position: relative;
    top: 50%;
    .bar {
      width: 0;
      height: 2px;
      background: ${globals.gold};
      position: absolute;
      /* left: 50%;
      transform: translateX(-50%); */
    }
  }

  @media (max-width: 1290px) {
    display: none;
  }
`;
