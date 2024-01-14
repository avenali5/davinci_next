import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const AboutStyle = styled.section`
  background: ${globals.black};
  width: 100%;
  padding: 3rem 1.5rem;
  color: ${globals.white};
  border-top: 2px dashed rgba(250, 250, 250, 0.4);
  position: relative;
  .wrapper {
    position: relative;
    width: 100%;
    &.max-width {
      max-width: 60rem !important;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .images {
    display: flex;
    /* width: 100vw; */
    .image-container {
      width: 50%;
      height: auto;
      min-height: 368px;
    }
    img {
      width: 100%;
      height: 100%;
      transform-origin: bottom;
      object-fit: cover;
      object-position: center;
      clip-path: inset(2px) !important;
    }
  }
  .cite {
    margin: 3rem 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    font-size: 1.9rem;
    font-style: italic !important;
    padding-left: 1rem;

    img {
      width: 1.5rem;
      height: auto;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
    }
    div {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.6rem;
      span {
        transition: all 0.3s;
        font-family: "Cormorant Infant";
      }
    }
  }
  p {
    margin: 2rem 0;
  }

  @media (min-width: 768px) {
    position: relative;
    .wrapper {
      min-height: 70rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .images {
        .image-container {
          width: 0;
          height: 0;
          overflow: hidden;
          &.first img {
            min-width: 425px;
            min-height: 444px;
            position: absolute;
            transform-origin: left top;
            transform: scale(2);
          }
          &.second {
            height: 600px;
            img {
              min-width: 375px;
              min-height: 600px;
              position: absolute;
              transform-origin: bottom right;
              transform: scale(2);
            }
          }
        }
        .image-container {
          position: absolute;
          z-index: 0;
          max-width: 425px;
          &.first {
            left: 0;
            top: 0;
          }
          &.second {
            right: 0;
            bottom: 0;
            max-width: 375px;
          }
        }
      }
      .cite {
        font-size: 2.9rem;
        text-align: center;
      }
      h2,
      p {
        position: relative;
        z-index: 1;

        &.first-p {
          display: flex;
          justify-content: end;
          max-width: 26rem;
          margin-left: auto;
          flex: 1;
        }
        &.second-p {
          max-width: 26rem;
        }
      }
    }
  }
`;
