import styled from "styled-components";

export type BtnProps = {
  current: boolean;
}

export const Button = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    padding: 6px;
    font-size: 18px;
    color: ${({current}: BtnProps) => current ? "#A451F7" : "inherit"};
    font-weight: ${({current}: BtnProps) => current ? "bold" : "inherit"};
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    padding: 6px 24px;
    font-size: 18px;
    outline: none;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    padding: 6px 24px;
    font-size: 18px;
    outline: none;
`;

export const SubmitBtn = styled.button`
  display: block;
  background: mediumpurple;
  color: #fff;
  border: none;
  margin: 0 auto;
  border-radius: 5000px;
  font-size: 18px;
`
