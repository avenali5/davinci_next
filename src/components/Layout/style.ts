import styled from "styled-components";
import { Cormorant, Nunito_Sans } from "next/font/google";
import { globals } from "@/styles/globals.style";

export const nunito = Nunito_Sans({
  variable: "--font-nunito",

  subsets: ["latin"],
});

export const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const LayoutStyle = styled.main`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: ${nunito.style.fontFamily}; */
  }

  .serif {
    /* font-family: ${cormorant.style.fontFamily}; */
  }

  .accent {
    color: ${globals.gold};
    font-weight: bold;
  }

  h2 {
    /* font-family: ${cormorant.style.fontFamily}; */
    font-size: 2.5rem;
  }

  &.page {
    position: relative;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
  }

  .max-width {
    margin: 0 auto;
    max-width: 65rem;
  }

  &.page:after {
    content: "";
    display: block;
    height: 300%;
    left: -100%;
    position: absolute;
    top: -100%;
    width: 300%;
    z-index: 100000;
    opacity: 1;
    animation: noise 8s steps(10) infinite;
    background: url("/assets/images/descarga.png");
    pointer-events: none;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3.5rem;
      line-height: 106%;
    }
  }
  @keyframes noise {
    0%,
    100% {
      background-position: 0 0;
    }

    10% {
      background-position: -5% -10%;
    }

    20% {
      background-position: -15% 5%;
    }

    30% {
      background-position: 7% -25%;
    }

    40% {
      background-position: 20% 25%;
    }

    50% {
      background-position: -25% 10%;
    }

    60% {
      background-position: 15% 5%;
    }

    70% {
      background-position: 0% 15%;
    }

    80% {
      background-position: 25% 35%;
    }

    90% {
      background-position: -10% 10%;
    }
  }
`;
