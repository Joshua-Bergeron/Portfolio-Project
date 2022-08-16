import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  background-color: #002855;
  min-height: 870px;

  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
    color: white;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: white;
  }
  a {
    color: #5c9b2c;
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Wrapper;
