import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const HeroStyle = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  min-height: 45rem;
  padding: ${globals.sectionPadding};
  padding-bottom: 3rem;
  position: relative;
  .image-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    .cover {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    .small {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    text-align: center;
    color: ${globals.white};
    position: relative;
    max-width: 28rem;

    .dates {
      opacity: 0;
      transform: translateY(2rem);
    }

    h2 {
      margin: 1rem auto 2rem;
      position: relative;
      width: fit-content;
      opacity: 0;
      transform: translateY(2rem);
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background: ${globals.white};
        bottom: 0;
      }
    }
    p {
      opacity: 0;
      transform: translateY(2rem);
    }
    .button-wrapper {
      margin-top: 2rem;
      width: 100%;
      .links {
        display: none;
      }
      button {
        width: 100%;
        opacity: 0;
        transform: translateY(2rem);
        display: block;
      }
    }
  }

  @media (min-width: 768px) {
    min-height: 100vh;
    .image-wrapper {
      background: url("assets/images/hero_large.png") no-repeat;
      background-position: 100% 20%;
      background-size: cover;
      .small {
        object-position: center -4rem;
        display: none;
      }
    }
    .text {
      h2 {
        font-size: 3.5rem;
      }
      .button-wrapper {
        margin-top: 2rem;
        width: 100%;

        .links {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 3rem;
          button {
            font-size: 1.3rem;
            background: none;
            border: none;
            outline: none;
            color: ${globals.white};
            width: fit-content;
            position: relative;
            &:before {
              content: "";
              position: absolute;
              top: 50%;
              left: 0%;
              transform: translate(-50%, -50%);
              border: 1px solid ${globals.white};
              width: 2rem;
              height: 2rem;
              border-radius: 200px;
              transition: 0.4s all;
            }
            &:hover {
              &:before {
                height: 2.3rem;
                width: 2.3rem;
                transform-origin: center center;
              }
            }
          }
        }
        .primary-button {
          display: none;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .image-wrapper {
      .small {
        object-position: center -20rem;
        background-size: 100%;
      }
    }
    .text {
      h2 {
        font-size: 3.5rem;
      }
      .button-wrapper {
        margin-top: 2rem;
        width: 100%;
      }
    }
  }
`;
