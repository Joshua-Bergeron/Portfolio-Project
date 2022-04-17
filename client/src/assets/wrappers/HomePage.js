import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #c3bef7;
  background-color: #002855;
  min-height: 50 rem;

  .page {
    display: grid;
    align-items: center;
    margin: auto;
    margin-left: 5rem;
    margin-right: 5rem;
    border-bottom: 10px solid #002855;
  }

  h1 {
    font-weight: 700;
    color: white;
    span {
      color: black;
      color: #5c9b2c;
    }
    text-align: center;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      min-height: 53.75rem;
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      height: 75%;
      width: 100%;
      display: block;
    }
  }

  @media (max-width: 992px) {
    h1 {
      margin-top: 50px;
    }
    .page {
      display: flex;
      flex-direction: column;
      border-bottom: 98px solid #002855;
    }
    .main-img {
      display: flex;
      margin-top: 75px;
    }
  }
`;
export default Wrapper;
