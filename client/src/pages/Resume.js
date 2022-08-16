import Wrapper from '../assets/wrappers/ResumeStyle';
import resume from '../assets/images/resume.pdf';

const Resume = () => {
  return (
    <Wrapper>
      <div className="flex-container">
        <div className="title">Resume</div>

        <p>
          <h4>Skills</h4>
          <ul>
            <li>Java</li>
            <li>HTML and CSS</li>
            <li>Familiar with C, Assembly, and Python</li>
            <li>Problem-Solving and Critical Thinking</li>
            <li>Leadership</li>
            <li>Teamwork, Communication, and Time Management</li>
            <li>Diligent and Hardworking</li>
          </ul>
          <h4>Education</h4>
          <b>University of California, Irvine</b>
          <i>B.S. Computer Science - Current Junior</i>
          <br />
          Start Date: 09/2022 Anticipated Graduation: 06/2024
          <br />
          <b>Palomar College, San Marcos, CA</b>
          <i>General Education</i>
          <br />
          Summer 2021 - Spring 2022 (Transfer to UC or CSU Fall 2022)
          <br />
          <ul>
            <li>4.0 GPA</li>
            <li>
              Completed all general education courses required to transfer and
              obtained a UC IGETC Certification
            </li>
          </ul>
          <b>Mission Hills High School, San Marcos, CA</b>
          <i>High School Diploma</i>
          <br />
          2017-2021 (Graduated June 2021 - Overall GPA: 4.41)
          <ul>
            <li>4.41 GPA</li>
          </ul>
          <h4>Experience</h4>
          <b>IT/Cybersecurity Intern</b> - <i>Kros-Wise</i>
          <br />
          06/2022 - 08/2022
          <ul>
            <li>
              Assisted auditing networks and security systems to identify
              vulnerabilities.
            </li>
            <li>
              Learned key aspects of the US Government cybersecurity
              requirements.
            </li>
            <li>
              Worked successfully with diverse group of coworkers to accomplish
              goals and address issues related to our products and services.
            </li>
          </ul>
          <b>Lead Math Tutor</b> - <i>Mathnasium of San Marcos</i>
          <br />
          11/2019 - Present
          <ul>
            <li>
              Coached students K-12 (up through Calculus) through challenging
              material with positive reinforcement and encouragement.
            </li>
            <li>
              Established a high level of proficiency in advanced math concepts.
            </li>
            <li>
              • Made informed decisions and communicated requested actions to
              employees.
            </li>
          </ul>
          <b>Retail Associate</b> - <i>LEGOLAND California Resort</i>
          <br />
          05/2019 - 08/2019
          <ul>
            <li>
              Processed transactions and stocked and cleaned shelves while
              maintaining neat and orderly store.
            </li>
            <li>
              Applied strong problem-solving and interpersonal skills to resolve
              conflicts.
            </li>
          </ul>
          <h4>Projects</h4>
          <b>Personal Portfolio Website</b>
          <br />
          <ul>
            <li>
              Used MongoDB, Express, React, and Node to create a full stack web
              application. Implemented design and function with CSS, HTML, and
              JavaScript. Hosted the website using Heroku.
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
