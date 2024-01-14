import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const ProgrammStyle = styled.section`
  background: ${globals.black};
  padding: 4rem 0;
  color: ${globals.white};

  h2 {
    padding-left: ${globals.sectionPadding};
  }

  .steps {
    .swiper {
      .swiper-slide {
        .number {
          margin-top: 4rem;
          padding-left: 4rem;
          position: relative;
          span {
            top: 50%;
            transform: translateY(-50%);
          }
          .prev-line {
            border-bottom: 5px dotted ${globals.gold};
            width: 3.5rem;
            left: 0.5rem;
            position: absolute;
          }
          .line {
            border-bottom: 5px dotted ${globals.gold};
          }

          span {
            position: absolute;
            color: ${globals.gold};
            border: 1px solid ${globals.gold};
            height: 2rem;
            width: 2rem;
            display: grid;
            place-items: center;
            border-radius: 200px;
            font-weight: bold;
          }
        }
        .text {
          margin-top: 2rem;
          padding: 2rem 4rem;
          h3 {
            font-size: 1.7rem;
            color: ${globals.gold};
            margin-bottom: 1rem;
          }
          p {
            max-width: 70%;
          }
        }
      }

      .swiper-slide:nth-child(1) {
        .number {
          .line {
            margin-left: 2rem;
          }
        }
      }
      .swiper-slide:nth-child(2),
      .swiper-slide:nth-child(3) {
        .number {
          .line {
            margin-left: 2rem;
          }
        }
      }
    }
    .swiper-pagination {
      position: relative;
      transform: translateY(0.8rem);

      .swiper-pagination-bullet {
        background: none;
        border: 1px solid ${globals.gold} !important;
        opacity: 1;
        width: 0.8rem;
        height: 0.8rem;
        &.swiper-pagination-bullet-active {
          background: ${globals.gold};
        }
      }
    }
  }

  @media (min-width: 768px) {
    pointer-events: none;
    .steps {
      .swiper {
        padding-left: 4rem;
        .swiper-wrapper {
          flex-direction: column;
          .swiper-slide {
            display: flex;
            align-items: start;
            .number {
              padding-left: 0;
              position: relative;
              .prev-line {
                border-bottom: 5px dotted ${globals.gold};
                width: 3.5rem;
                left: 0.5rem;
                position: absolute;
                display: none;
              }
              .line {
                border-left: 5px dotted ${globals.gold};
                border-bottom: none;
                width: 3rem;
                height: 10rem;
                position: absolute;
                left: calc(50% + 0.3rem);
                bottom: -1rem;
                transform: translate(-50%, 100%);
              }
            }
            .text {
              margin-top: 1rem;
            }
          }
          .swiper-slide:nth-child(2),
          .swiper-slide:nth-child(3) {
            .number {
              .line {
                margin-left: 2rem;
              }
            }
          }
        }
      }
      .swiper-pagination {
        display: none;
      }
    }
  }
`;
