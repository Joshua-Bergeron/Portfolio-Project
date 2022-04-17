import Wrapper from '../assets/wrappers/HomePage';
import home from '../assets/images/homePG.svg';

const Home = () => {
  return (
    <Wrapper>
      <div>
        <div className="page">
          <div className="info">
            <h1>
              Hi, I'm <span>Joshua.</span> Welcome to my portfolio site!
            </h1>
          </div>
          <img src={home} alt="coding" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
