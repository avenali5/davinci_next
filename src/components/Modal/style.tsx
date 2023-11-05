import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: 0.3s all;

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  .card {
    background: ${globals.white};
    padding: 1rem;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    width: 90%;
    max-width: 26rem;
    h2 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    .react-datepicker-wrapper {
      display: none;
    }
    .react-datepicker__input-container {
      input {
        padding: 10px 16px;
        border: none;
        border-radius: 9px;
        background: #e6e3d3;
        border: 1px solid ${globals.gold};
      }
    }
    .react-datepicker-popper {
      position: relative !important;
      transform: none !important;
      margin-bottom: 2rem;
      .react-datepicker {
        width: 100%;
        display: flex;
        border-radius: 1rem;
        overflow: hidden;
        border: 1px solid ${globals.gold};
        .react-datepicker__navigation {
          top: 10px;

          &.react-datepicker__navigation--next {
            right: 120px;
          }
        }
        .react-datepicker__header {
          height: 47px;
          border-color: ${globals.gold};
        }
        .react-datepicker__month-container {
          flex: 2;
          background: #e6e3d3;

          .react-datepicker__day--selected {
            background: ${globals.gold};
            color: ${globals.black};
            font-weight: bold;
          }
        }
        .react-datepicker__time-container {
          flex: 1;
          border-color: ${globals.gold};
          .react-datepicker__header {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .react-datepicker__time {
            background: #d1cebf;
            .react-datepicker__time-list-item {
              border-radius: 200px;
              &:hover {
                /* background:  */
              }
            }
            .react-datepicker__time-list-item--selected {
              background: ${globals.gold};
              border-radius: 200px;
              color: ${globals.black};
            }
          }
        }
      }

      *::-webkit-scrollbar {
        width: 0;
      }
    }

    .saved {
      h3 {
        font-size: 1.8rem;
        margin-bottom: 0.6rem;
      }
      .buttons {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        font-size: 1rem;
        span {
          cursor: pointer;
        }
        button {
          /* padding: 0.5rem 1rem; */
          font-size: 1rem;
        }
      }
    }
  }
`;
