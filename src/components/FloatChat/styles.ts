import styled from "@emotion/styled";
import * as C from "@chakra-ui/react";

export const FloatChat = styled.a`
  position: fixed;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  right: 50px;
  bottom: 50px;
  background: #4a5568;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  z-index: 5;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
    background: #48bb78;

    & > div {
      opacity: 1;
      visibility: visible;
    }
  }

  @media screen and (max-width: 450px) {
    right: 24px;
    bottom: 12px;
  }
`;

export const Message = styled.div<C.BoxProps>`
  text-decoration: none;
  position: absolute;
  bottom: 80px;
  opacity: 0;
  visibility: hidden;
  width: 300px;
  right: 0;
  background-color: #4a5568;
  color: #fff;
  border-radius: 5px;
  border: 0.5px solid #4a5568;
  padding: 8px;
  transition: 300ms linear;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    right: 15px;
    bottom: -5px;
    height: 8px;
    width: 8px;
    transform: rotate(45deg);
    background-color: #4a5568;
    border-bottom: 0.5px solid #4a5568;
    border-right: 0.5px solid #4a5568;
  }
`;
