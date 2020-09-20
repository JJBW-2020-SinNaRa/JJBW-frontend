import styled from "styled-components";
import {MouseEvent} from 'react';

export const Button = styled.button<any>`
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    padding: 6px;
    font-size: 18px;
    color: ${({current}) => current ? "#A451F7" : "inherit"};
    font-weight: ${({current}) => current ? "bold" : "inherit"};
`

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 24px;
  font-weight: bold;
  line-height: 1.5;
`

export const Field = styled.div`
  h3 {
    font-size: 20px;
    margin-bottom: 12px;
    color: #5C5959;
    margin-left: 24px;
  }
  
  div:not(:last-child) {
    margin-bottom: 12px;
  }
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
    border: none;
    background: none;
    padding: 12px 24px;
    font-size: 18px;
    outline: none;
    resize: none;
    height: 150px;
`;

export const SubmitBtn = styled.button`
  display: block;
  background: mediumpurple;
  color: #fff;
  border: none;
  margin: 0 auto;
  padding: 12px 24px;
  border-radius: 5000px;
  font-size: 18px;
`
