import styled from 'styled-components';

export const WrapperCountries = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  font-size: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;