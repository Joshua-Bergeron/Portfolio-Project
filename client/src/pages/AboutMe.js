import Wrapper from '../assets/wrappers/About';
import family from '../assets/images/sisters.JPG';
import tennis from '../assets/images/tennis.JPG';
import coffee from '../assets/images/coffee.jpg';

const aboutMe = () => {
  return (
    <Wrapper>
      <div className="flex-container">
        <div className="title">About Me</div>

        <h2>Family</h2>
        <div className="section">
          <img src={family} alt="img" className="img"></img>

          <p className="paragraph">
            There are five members of the Bergeron family. My parents, Kevin and
            Denise, my older sister Marissa, and my younger sister Sophia. My
            mom works as a teacher at a local elementary school. My dad went to
            school to be a chiropractor and currently works for American
            Specialty Health. My older sister Marissa recently graduated from
            Cal State San Marcos with a degree in accounting. She is presently
            working for CBIZ, a public accounting firm. My younger sister Sophia
            is a Sophomore in high school. I recently finished my general
            education at the local community college, Palomar. I am now be
            attending University of California, Irvine starting 09/2022 to
            persue a B.S in Computer Science. This past summer (2022) I also
            completed a IT and Cybersecurity internship with a local company.
          </p>
        </div>

        <h2>Hobbies</h2>
        <div className="section">
          <img src={tennis} alt="img" className="img"></img>
          <p className="paragraph">
            I have developed many different hobbies that I enjoy doing
            throughout my teens to relax my mind between long working sessions.
            Tennis is one of these means. I have played tennis for seven years,
            playing on the Varsity high school team for four. Although I do not
            play as often, it is something I enjoy. In high school, I also took
            culinary classes and have found cooking is another passion of mine.
            I like to try new recipes and cooking techniques when I can see the
            time. In my free time, I also enjoy the occasional video game
            session, going to the gym, taking walks outside, playing with my
            cat, and reading. I also have a lot of fun hanging out with my
            friends and playing poker with them.
          </p>
        </div>

        <h2>Interests</h2>
        <div className="section">
          <img src={coffee} alt="img" className="img"></img>
          <p className="paragraph">
            I have several interests related to the field that I want to pursue
            in my education and future career. Generally speaking, technology is
            constantly adapting and changing every day. I find it so intriguing
            that I can create anything I put my mind to. In high school, I built
            my computer and learned a lot about all the components needed to
            create a functioning system. After getting a degree in computer
            science, I am also interested in going into cybersecurity. I find
            the field fascinating and have much to learn about it. Aside from my
            interests in technology, I also have interests in coffee. There are
            so many different coffee beans and drinks that can be made. I always
            enjoy exploring local coffee shops and seeing what they offer.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default aboutMe;
