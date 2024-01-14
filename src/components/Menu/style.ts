import { globals } from "@/styles/globals.style";
import styled from "styled-components";

export const MenuStyle = styled.menu`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background: ${globals.black};
  opacity: 0;
  pointer-events: none;
  transition: 0.4s all;
  color: ${globals.white};
  padding: ${globals.sectionPadding};

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;

    .close {
      position: relative;
      color: ${globals.white};

      &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 5rem;
        width: 5rem;
        border-radius: 200px;
        border: 1px solid ${globals.white};
        opacity: 0.3;
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 10rem;
    li {
      font-size: 3rem;
      transition: 0.4s all;
      &:hover {
        color: ${globals.gold};
      }
      span {
        font-size: 0.9rem;
        font-weight: 300;
      }
    }
  }
`;
