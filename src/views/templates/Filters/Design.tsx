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

type BtnGridProps = {
  content: number;
}

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({content}: BtnGridProps) => content}, 1fr);
  grid-column-gap: 6px;
  justify-content: center;
  align-content: center;
`
