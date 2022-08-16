import styled from 'styled-components';

const Wrapper = styled.div`
  border-left: 100px solid #002855;
  border-right: 100px solid #002855;
  border-bottom: 50px solid #002855;

  .flex-container {
    min-height: 1000px;
    height: auto;
    background-color: #002855;
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

  h4 {
    margin-right: 50px;
    font-weight: 700;
    color: #5c9b2c;
  }
  p {
    display: block;
    padding: 25px 75px;

    justify-content: flex-start;
    background-color: white;
    margin: auto;
    text-align: left;
    background-color: #222222;
    color: white;

    .download {
      font-weight: 600;
      text-decoration: none;
      color: #5c9b2c;
    }
  }

  @media (max-width: 1200px) {
    p {
      padding: 5px 25px;
    }
    border-left: 25px solid #002855;
    border-right: 25px solid #002855;
    border-bottom: 15px solid #002855;
  }
`;
export default Wrapper;
