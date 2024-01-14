import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const WhoIsStyle = styled.section`
  padding: 3rem ${globals.sectionPadding};
  background: ${globals.black};
  color: ${globals.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  .top {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;
    h2 {
      position: absolute;
      bottom: 0;
      font-size: 3rem;
      .wrap {
        overflow: hidden;
        span {
          display: block;
          transform: translateY(100%);
        }
      }
      span {
        position: relative;
        z-index: 1;
        .rectangle {
          /* content: ""; */
          position: absolute;
          width: 0%;
          background: ${globals.gold};
          height: 60%;
          border-radius: 200px;
          z-index: -1;
          top: 55%;
          left: 10%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .to-do {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    h4 {
      text-decoration: underline;
      margin-bottom: 2rem;
      font-size: 1.4rem;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      > div {
        display: flex;
        align-items: center;
        gap: 25px;
        .radio-input {
          border: 1px solid ${globals.white};
          height: 30px;
          width: 30px;
          border-radius: 200px;
          position: relative;
          .ball {
            height: 60%;
            width: auto;
            aspect-ratio: 1 / 1;
            background: ${globals.gold};
            border-radius: 200px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        span {
          width: 70%;
        }
      }
    }

    .image {
      width: 100%;
      height: auto;
      position: relative;
      img {
        width: 100%;
        object-fit: cover;
      }
      .image-loader {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background: #10090390;
        &:before {
          content: "";
          height: 1rem;
          width: 1rem;
          border: 4px solid ${globals.white};
          border-top-color: ${globals.gold};
          border-bottom-color: ${globals.gold};
          border-radius: 200px;
          -webkit-animation: rotating 1.3s linear infinite;
          -moz-animation: rotating 1.3s linear infinite;
          -ms-animation: rotating 1.3s linear infinite;
          -o-animation: rotating 1.3s linear infinite;
          animation: rotating 1.3s linear infinite;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding-block: 10rem;
    .top {
      margin-bottom: 10rem;
      h2 {
        font-size: 4rem;
      }
    }
    .to-do {
      flex-direction: row;
      .list {
        gap: 2rem;
      }
      .image {
        width: 25rem;
        margin: 0 auto;
      }
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
