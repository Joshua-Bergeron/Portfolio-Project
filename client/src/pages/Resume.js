import Wrapper from '../assets/wrappers/ResumeStyle';
import resume from '../assets/images/resume.pdf';

const Resume = () => {
  return (
    <Wrapper>
      <div className="flex-container">
        <div className="title">Resume</div>

        <p>
          <h4>Objective</h4>I am a first-year college student and will transfer
          to a four-year university to pursue a computer science degree in the
          Fall of 2022. Due to having a significant number of AP test credits
          and a rigorous course load, I will complete my general education
          requirements by the end of this academic year (Spring 2022). I am
          seeking an internship for the Summer of 2022 to gain experience and
          help prepare me for my future career in software engineering.
          <h4>Skills</h4>
          <ul>
            <li>Python and Java</li>
            <li>Problem-Solving and Critical Thinking</li>
            <li>Teamwork and Communication</li>
            <li>Diligent and Hardworking</li>
          </ul>
          <h4>Education</h4>
          <b>Palomar College, San Marcos, CA</b>
          <br />
          Summer 2021 - Spring 2022 (Transfer to UC or CSU Fall 2022)
          <br />
          <ul>
            <li>
              General Education will be completed by the end of Spring 2022
            </li>
            <li>
              Taking Data Structures and Machine Assembly classes Spring 2022
            </li>
          </ul>
          <b>Mission Hills High School, San Marcos, CA</b>
          <br />
          2017-2021 (Graduated June 2021 - Overall GPA: 4.41)
          <ul>
            <li> Python and Java classes</li>
            <li>AP/Honors classes</li>
            <li>National Honor Society</li>
            <li>Informal peer tutoring</li>
            <li>Varsity Boys Tennis Team (4 years)</li>
          </ul>
          <h4>Experience</h4>
          <b>Mathnasium of San Marcos</b> - <i>Lead Math Tutor</i>
          <br />
          November 2019 - Present
          <ul>
            <li>
              Tutor students in math grades K-12 (up through Calculus) with an
              emphasis on strengthening areas of student struggle
            </li>
            <li>
              Multitasking and teamwork - tutoring several students at once
            </li>
            <li>Serve as a role model to the students I tutor</li>
          </ul>
          <b>LEGOLAND California Resort</b> - <i>Retail Associate</i>
          <br />
          May 2019 - August 2019 (Summer Job)
          <ul>
            <li>
              Restocked the store, had good product knowledge, store
              cleanliness, and processed transactions
            </li>
            <li>Created personalized experiences for each guest</li>
          </ul>
          <h4>Volunteering</h4>
          <b>Shooting Stars Basketball, San Marcos, CA</b>
          <br />
          <ul>
            <li>
              Assisted in helping children with special needs play basketball
              for three (3) years
            </li>
          </ul>
          <b>Community Lutheran Church, Escondido</b>
          <br />
          <ul>
            <li>
              Volunteered for three (3) years completing various service events
            </li>
          </ul>
          <h4>Awards</h4>
          <ul>
            <li>AP Scholar with Distinction 2020-2021 (High school)</li>
            <li>Best Buddies” from Shooting Stars Basketball volunteer work</li>

            <li>
              Rookie of the Year, Best Doubles Team, and Avocado League Doubles
              Champion (Tennis)
            </li>
          </ul>
          Download a PDF version of my resume{' '}
          <a className="download" href={resume} download="BergeronResume">
            here
          </a>
        </p>
      </div>
    </Wrapper>
  );
};
export default Resume;
