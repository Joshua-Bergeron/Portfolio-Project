import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #002855;
  min-height: 870px;

  h1 {
    justify-content: flex-start;
    min-height: 150px;
    position: relative;
    top: 65px;
    color: white;
    font-size: 40px;
    margin: auto;
    text-align: center;
    justify-content: center;
    font-weight: 700;
    display: flex;
    span {
      color: black;
      color: #5c9b2c;
    }
  }

  p {
    color: white;
    text-align: center;
    .download {
      font-weight: 600;
      text-decoration: none;
      color: #5c9b2c;
    }
  }

  .sendBtn {
    display: block;
    text-align: center;
    border: 0;
    background: #5c9b2c;
    padding: 0.5rem;
    color: white;
    margin: 1rem 0;
    margin: 50px auto;
    width: auto;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s background ease;
    &:hover {
      background-color: #add8e6;
    }
  }
`;

export default Wrapper;
