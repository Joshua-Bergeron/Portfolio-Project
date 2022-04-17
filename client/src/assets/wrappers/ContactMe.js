import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #002855;
  min-height: 870px;

  .title {
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
  }

  .form {
    max-width: 500px;
    margin: 2rem auto;
    border: 3px solid white;
    padding: 2rem;
    border-radius: 5px;
    background-color: #71797e;
    color: white;
    background-color: #222222;
  }

  p {
    color: white;
    margin: 0;
    text-align: center;
    .download {
      font-weight: 600;
      text-decoration: none;
      color: #5c9b2c;
    }
    .align-left {
      display: block;
      text-align: left;
    }
  }

  h4 {
    font-weight: 400;
    margin: auto;
  }

  .outside-links {
    color: #5c9b2c;
    padding: 4px;
    text-align: left;
  }

  label {
    display: block;
    padding: 1rem 0 0.25rem;
    font-size: 16px;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 2px solid black;
    padding: 0.5rem;
    font-size: 16px;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    outline: none;
  }

  .characters {
    width: 100%;
    text-align: right;
    margin-top: 5px;
    color: #737373;
  }

  .sendBtn {
    border: 0;
    background: #5c9b2c;
    padding: 0.5rem;
    color: white;
    margin: 1rem 0;
    width: auto;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s background ease;
    &:hover {
      background-color: #add8e6;
    }
  }

  #box {
    transition: box-shadow 0.3s;
    border-radius: 10px;
    margin: auto;
  }
  #box:hover {
    box-shadow: 0 0 15px #5c9b2c;
  }
`;

export default Wrapper;
