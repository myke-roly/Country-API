import styled from 'styled-components';

export const Back = styled.i`
  margin-top: 2rem;
  padding: .5rem 1rem;
  background: ${props => (!props.theme.dark ? '#fff' : 'hsl(209, 23%, 22%)')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  color: ${props => (!props.theme.dark ? 'hsl(209, 23%, 22%)' : '#fff')};
  border-radius: 5px;
`;

export const WrapperDetail = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-gap: 2rem;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 960px) {
    display: block;
  }

  img {
    display: inline-block;
    width: 100%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
  }

  .section-right {
    padding: 2rem;

    h1 {
      font-weight: bold;
    }

    section {
      margin: 1rem 0;
      display: flex;

      @media (max-width: 760px) {
        flex-direction: column;
      }

      p {
        margin-bottom: 1rem;
      }

      .left {
        margin-right: 4rem;

        @media (max-width: 720px) {
          margin-bottom: 1.5rem;
          margin-right: 0;
        }
      }
    }

    .btn {
      padding: .2rem .8rem;
      margin-left: .5rem;
      border: none;
      background: ${props => (!props.theme.dark ? '#fff' : 'hsl(209, 23%, 22%)')};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
      color: ${props => (!props.theme.dark ? 'hsl(209, 23%, 22%)' : '#fff')};
      border-radius: 5px;
      margin-top: 1rem;
    }
  }



`;