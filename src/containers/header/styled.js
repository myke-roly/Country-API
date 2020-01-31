import styled from 'styled-components';

export const WrapperHeader = styled.header`
  position: fixed;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  background: ${props => (!props.theme.dark ? '#fff' : 'hsl(209, 23%, 22%)')};
  color: ${props => (!props.theme.dark ? 'hsl(209, 23%, 22%)' : '#fff')};
  padding: 1.2rem 0;
  transition: all 300ms ease;
  z-index: 100;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-size: 1.1rem;
      font-weight: 700;
    }

    .button {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;
