import styled, {keyframes} from 'styled-components';

const animate = keyframes`
  from {height: 0;}
  to {height: 45%;}
`;

export const WrapperCountry = styled.section`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.dark ? 'hsl(209, 23%, 22%)' : '#fff' };
  color: ${props => (props.theme.dark ? '#fff' : 'hsl(209, 23%, 22%)')};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0, 0.18);
  transition: all 500ms ease;

  img {
    display: inline-block;
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 45%;
    animation: ${animate} 500ms ease;
  }

  ul {
    padding: 1.5rem;

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
    }

    li {
      margin-top: .5rem;
      opacity: .6;
    }
  }
`;

