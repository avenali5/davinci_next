import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const TicketsStyle = styled.section`
  background: ${globals.white};
  padding: 4rem ${globals.sectionPadding};
  color: ${globals.black};

  h2 {
    margin-bottom: 3rem;
  }

  .date-time {
    /* cursor: pointer; */
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
    margin-bottom: 3rem;
    border: 1px dashed ${globals.gold};
    border-radius: 1rem;
    padding: 1rem;
    img {
      width: 5rem;
      height: auto;
    }
    span {
      width: 40%;
    }
  }

  .tickets {
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      justify-content: space-between;
      gap: 1rem;
      > span {
        width: 9rem;
      }
      .sum {
        display: flex;
        align-items: center;

        gap: 0.5rem;
        flex: 1;
        button {
          border-radius: 200px;
          height: 1.7rem;
          width: 1.7rem;
          border: none;
          outline: none;
          cursor: pointer;
          background: ${globals.gold};
        }
      }
    }
    .total {
      margin-top: 4rem;
      font-size: 1.7rem;
      display: flex;

      flex-wrap: wrap;
      span {
        width: max-content;
        font-weight: bold;
      }
      button {
        width: 100%;
        max-width: 650px;
      }
    }
  }

  .quick-entry {
    margin: 0 !important;
    img {
      width: 12rem;
      height: auto;
    }
  }

  @media (min-width: 768px) {
    .date-time {
      span {
        font-size: 1.2rem;
      }
    }
    .tickets {
      > div {
        > span {
          width: 12rem;
          font-size: 1.2rem;
        }
        .sum {
          font-size: 1.2rem;
        }
        .price {
          font-size: 1.2rem;
        }
      }
      .total {
        flex-wrap: nowrap;
        align-items: center;
        span {
          font-size: 1.8rem;
        }
        button {
          width: fit-content;
        }
      }
    }
  }
`;
