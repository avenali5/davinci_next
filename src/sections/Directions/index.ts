import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const DirectionsStyle = styled.section`
  background: ${globals.black};

  color: ${globals.white};
  border-top: 2px dashed ${globals.white};

  h2 {
    padding: 2rem ${globals.sectionPadding} 0;
  }
  .directions-image {
    .directions {
      padding: ${globals.sectionPadding};

      > div {
        margin-bottom: 2rem;
        h3 {
          color: ${globals.gold};
          margin-bottom: 0.5rem;
        }
      }
    }

    .image {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .map {
    img {
      width: 100%;
      height: auto;
    }
    .vehicles {
      box-shadow: 0px 10px 15px 15px rgba(0, 0, 0, 0.25);
      padding: 2rem;
      margin: 1rem auto;
      max-width: 24rem;
      transform: translateY(-30%);
      background: ${globals.black};
    }
  }

  .footer {
    margin-top: 4rem;
    padding: ${globals.sectionPadding};
    .quick-entry {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 13rem;

      span {
        font-size: 1.5rem;
        max-width: 17rem;
      }
    }

    .info {
      margin-top: 3rem;
      h3 {
        font-size: 1.7rem;
        margin-bottom: 0.5rem;
      }
      p {
        margin: 0.5rem 0;
      }
    }
  }
  .dotted {
    display: none;
  }
  @media (min-width: 768px) {
    padding-top: 3rem;
    .directions-image {
      display: flex;
      margin-top: 3rem;
      position: relative;
      .directions {
        .dotted {
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
      .image {
        position: relative;
        width: 100%;
        > div {
          margin-bottom: 2rem;
          max-width: 25rem;
        }
        img:not(.dotted) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left;
          /* opacity: 0; */
        }
      }
    }
    .map {
      display: flex;
      align-items: center;
      position: relative;

      .vehicles {
        transform: none;
      }
    }
    .footer {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      .quick-entry {
        margin-top: 0;
        width: fit-content;
        button {
          width: auto;
        }
      }
    }
  }
`;
