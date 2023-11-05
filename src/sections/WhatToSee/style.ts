import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const WhatToSeeStyle = styled.section`
  background: ${globals.white};
  overflow-x: hidden;
  .text {
    padding: 4rem ${globals.sectionPadding} 2rem !important;
    h2 {
      width: 60%;
    }
    p {
      margin-top: 2rem;
    }
    .scroll-right {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  .slider {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 0;
    }
    .slide {
      position: relative;
      height: 40rem;
      aspect-ratio: 1 / 2;
      img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        transition: 0.3s all;
      }
      .text {
        position: absolute;
        bottom: 0;
        color: ${globals.white};
        transition: 0.3s all;
        transform: translateY(3rem);
        opacity: 0;
        h3 {
          margin: 1rem 0 1.5rem;
          font-size: 1.9rem;
          width: 70%;
        }
      }
      &:hover {
        img {
          filter: brightness(0.8);
        }
        .text {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100vh;
    .text {
      width: 100%;
      max-width: 80rem;
      h2 {
        width: 15rem;
      }
      p {
        width: 20rem;
      }
      .scroll-right {
        display: none;
      }
    }
    .slider {
      height: 100vh;
      position: absolute;
      /* transform: translateX(60%); */
      overflow: hidden !important;
      .slide {
        height: 100%;
      }
    }
  }
`;
