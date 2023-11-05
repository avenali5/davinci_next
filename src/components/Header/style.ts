import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding: ${globals.sectionPadding} !important;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  mix-blend-mode: exclusion;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    max-width: 1200px;

    .logo {
      h4 {
        color: ${globals.white};
      }
    }
    .location {
      color: ${globals.gold};
    }
    .location,
    .button-wrapper {
      display: none;
    }
    .burguer {
      cursor: pointer;
      img {
      }
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      gap: 3rem;
      .logo {
        flex: 1;
        h4 {
          color: ${globals.white};
          font-size: 1.5rem;
        }
      }
      .location,
      .button-wrapper {
        display: flex;
        button {
          padding: 14px 32px !important;
        }
      }
      .location {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        color: ${globals.white};
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`;
