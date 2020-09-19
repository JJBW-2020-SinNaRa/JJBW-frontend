import styled from 'styled-components';

// Container
export const TrashCardContainer = styled.div`
  border-radius: 25px;
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-column-gap: 3vw;
  grid-template-rows: 15vw;
  padding: 3vw;
  box-shadow:
    0 8px 20px 4px rgba(0, 0, 0, 0.1),
    0 2px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 768px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  img {
    border-radius: 25px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  text-align: left;
  
  h2 {
    margin: 0;
    font-size: 6vw;
    
    img {
      margin-right: 5px;
    }
  }
  
  span {
    text-align: right;
    font-size: 2vw;
    
    img {
      height: 1.5vw;
      margin-right: 5px;
    }
  }
  
  @media (min-width: 768px) {
    h2 {
      font-size: 30px;
    }
  }
`;
