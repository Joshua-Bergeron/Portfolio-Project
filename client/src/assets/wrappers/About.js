import styled from 'styled-components';

const Wrapper = styled.div`
  .flex-container {
    min-height: 1000px;
    height: auto;
    background-color: #002855;
    border-bottom: 10px solid #002855;
  }
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
  h2 {
    color: white;
    font-weight: 700;
    flex-direction: column;
    margin-left: 175px;
    position: relative;
    top: 15px;
  }
  .section {
    min-height: 300px;
    display: flex;
    flex-direction: row;
    color: black;
    margin-bottom: 50px;
    h1 {
      text-align: center;
    }

    div {
      background-color: #e2e2e2;
      margin: auto;
      padding-top: 125px;
      margin-left: 45px;
      .img-container {
        background-color: yellow;
        min-height: 100%;
        min-width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        line-height: 1;
      }
    }
    p {
      flex-grow: 0.5;
      padding: 50px 150px;
      display: flex;
      justify-content: flex-start;
      background-color: white;
      margin: auto;
      text-align: center;
      background-color: #222222;
      color: white;
    }

    .img {
      display: flex;
      margin-left: 50px;
      max-width: 300px;
      max-height: 300px;
      border: 20px solid #222222;
      border-radius: 15px;
    }
  }
  @media (max-width: 1200px) {
    h2 {
      text-align: center;
      margin: 0;
      margin-bottom: 25px;
    }
    .section {
      flex-direction: column;
      flex: wrap;

      .img {
        margin: auto;
      }
      .paragraph {
        margin: 30px;
        border: 1px solid #222222;
        border-radius: 15px;
        padding: 50px 25px;
      }
    }
  }
`;

export default Wrapper;
