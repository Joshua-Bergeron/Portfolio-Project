import styled from 'styled-components';

const Wrapper = styled.nav`
  div {
    font-size: 20px;
    color: white;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: #222222;
    }
  }
  background-color: #71797e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 8%;
  padding-right: 8%;
  padding-bottom: 20px;
  margin: 0 auto;
  
  @media only screen and (max-width: 500px) {
    div {
      font-size: 14px;
    }
  }
`;
export default Wrapper;
