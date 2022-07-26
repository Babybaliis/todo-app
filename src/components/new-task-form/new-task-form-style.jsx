import styled from "styled-components";

export const H1 = styled.h1`
  position: absolute;
  top: -140px;
  width: 100%;
  font-size: 80px;
  font-weight: 200;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  text-rendering: optimizeLegibility;
`;

export const Input = styled.input.attrs({
  type: "text",
})`
  ::placeholder {
    font-style: italic;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.4);
  }
`;
