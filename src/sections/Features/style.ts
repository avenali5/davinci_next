import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const FeaturesStyle = styled.section`
  background: ${globals.white};
  color: ${globals.black};
  overflow-x: hidden;
  h3 {
    text-align: center;
  }

  > img {
    width: 40rem;
    height: auto;
    transform: translateX(8rem);
    margin: 3rem 0;
    opacity: 0.4;
  }

  .swiper {
    padding-bottom: 3rem;
    .swiper-slide {
      padding: ${globals.sectionPadding};
      h4 {
        font-size: 1.9rem;
      }
      p {
        margin: 1rem 0 1.5rem;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .swiper-pagination {
    position: relative;
    transform: translateY(100%);

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
  .cite {
    margin: 4rem 0;
    position: relative;
    padding: 0 ${globals.sectionPadding};
    img {
      position: absolute;
      mix-blend-mode: difference;
      top: 0;
      left: 1rem;
      width: 2rem;
      height: auto;
    }
    div {
      text-align: left;
      padding-left: 4rem;
      display: inline-flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      span {
        font-size: 1.8rem;
        transition: all 0.3s;
        font-family: "Cormorant Infant";
        font-weight: 600;
      }
    }
  }

  @media (min-width: 768px) {
    .leonardo {
      width: 80%;
      position: relative;
      /* left: -10%; */
      /* position: absolute; */
    }
    .swiper {
      width: 100%;
      .swiper-wrapper {
        flex-direction: column;
        width: 100%;
        max-width: 50rem;
        margin: 0 auto;
        .swiper-slide {
          width: unset !important;
          > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 2rem;
            &.second {
              flex-direction: row-reverse;
            }
            .text {
              max-width: 20rem;
              h4 {
                font-size: 2.5rem;
                line-height: 106%;
              }
            }

            .image {
              width: 18rem;
              height: 26rem;
              position: relative;
              .wrap {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                img {
                  width: 18rem;
                  height: auto;
                  min-height: 26rem;
                }
              }
            }
          }
        }
      }
    }
    .cite {
      max-width: 50rem;
      div {
        text-align: left;
        padding-left: 4rem;
        display: inline-flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        span {
          font-size: 2.5rem;
          transition: all 0.3s;
          font-family: "Cormorant Infant";
        }
      }
    }
  }
`;
