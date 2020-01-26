import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1rem;
  padding-top: 1rem;
`;


const App = () => {
  return (
    <div className="container">
      <Title>Where is the word?</Title>
    </div>
  );
}

export default App;
