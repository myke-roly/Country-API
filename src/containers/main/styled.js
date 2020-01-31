import styled from 'styled-components';

export const WrapperMain = styled.main`
  padding: 5rem 0;
  width: 100%;
  min-height: 100vh;
  background: ${props =>
    !props.theme.dark ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'};
  color: ${props => (!props.theme.dark ? 'hsl(207, 26%, 17%)' : '#fafafa')};
`;

export const WrapperForm = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  
  @media (max-width: 720px) {
    display: block;
  }
`;

export const Input = styled.section`
  background: ${props => (!props.theme.dark ? '#fff' : 'hsl(209, 23%, 22%)')};
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.18);
  width: 350px;
  padding: 0.7rem 1rem;
  transition: all 300ms ease;

  @media (max-width: 720px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  button {
    display: inline-block;
    border: none;
    background: transparent;
    cursor: pointer;
    color: ${props => (!props.theme.dark ? 'hsl(209, 23%, 22%)' : '#fafafa')};
  }

  input {
    color: ${props => (!props.theme.dark ? 'hsl(209, 23%, 22%)' : '#eee')};
    width: 90%;
    margin-left: 1rem;
    border: none;
    background: transparent;
    padding: 0.1rem 0;
    outline: none;
  }
`;

export const WrapperSelect = styled.section`
  width: 250px;
  position: relative;

  .fa-arrow-down {
    position: absolute;
    right: 20px;
    top: calc(50% - .5rem);
    width: 16px;
    height: 16px;
    display: block;
    transition: all 0.25s ease;
  }
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  width: 100%;
  color: ${props => (props.theme.dark ? '#eee' : 'hsl(209, 23%, 22%)')};
  background: ${props => (!props.theme.dark ? '#fff' : 'hsl(209, 23%, 22%)')};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.18);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  outline: none;
  padding: 0.7rem 1rem;
  transition: all 0.25s ease;
`;
