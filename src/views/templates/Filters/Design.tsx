import styled from "styled-components";

export const Container = styled.section`
  padding: 36px 0;
  display: grid;
  grid-row-gap: 36px;
`

export const Content = styled.div`
  h3 {
    font-size: 20px;
    color: #5C5959;
    margin-bottom: 6px;
  }
`

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 6px;
  justify-content: center;
  align-content: center;
`

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

export const SubmitBtn = styled.button`
  display: block;
  background: mediumpurple;
  color: #fff;
  border: none;
  margin: 0 auto;
  border-radius: 5000px;
  font-size: 18px;
  padding: 12px 48px;
`
