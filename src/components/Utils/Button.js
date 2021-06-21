import React from "react";
import styled, { css } from "styled-components";

const Button = ({ text, onClick, primary, secondary, red }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      primary={primary}
      secondary={secondary}
      red={red}
    >
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  background-color: #2b579a;
  color: #eee;
  &:hover {
    background-color: #1c3963;
  }
  &:active {
    background-color: #1c3963;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: #1ba148;
      color: #eee;
      &:hover {
        background-color: #0a9037;
      }
      &:active {
        background-color: #098026;
      }
    `}

  ${(props) =>
    props.red &&
    css`
      background-color: #b3211e;
      color: #eee;
      &:hover {
        background-color: #a2100d;
      }
      &:active {
        background-color: #91000c;
      }
    `}
`;

export default Button;