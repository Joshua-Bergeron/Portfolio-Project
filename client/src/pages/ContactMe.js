import Wrapper from '../assets/wrappers/ContactMe';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import resume from '../assets/images/resume.pdf';
import emailjs from 'emailjs-com';

const Form = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //inputted characters
    var myText = document.getElementById('message');
    var result = document.getElementById('result');
    var limit = 1000;
    result.textContent = 0 + '/' + limit;

    var textLength = myText.value.length;
    result.textContent = textLength + '/' + limit;

    if (textLength > limit) {
      myText.style.borderColor = '#ff2851';
      result.style.color = '#ff2851';
    } else {
      myText.style.borderColor = 'black';
      result.style.color = '#737373';
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iwelydg',
        'template_gydkqsk',
        e.target,
        'saSlHjurhhKjsJ743'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const response = await axios.post('/api/v1/form', formState);
    e.target.reset();
    if (response) {
      setTimeout(() => {
        navigate('/formSubmitted');
      }, 2000);
    }
  };

  return (
    <Wrapper className="full-page">
      <div>
        <div className="title">Contact Me</div>

        <form className="form" id="box" onSubmit={onSubmit}>
          <p className="align-left">
            If you have any questions, or are interested in contacting me,
            please fill out the form below. My contact information can also be
            found on the PDF version of my{' '}
            <a className="download" href={resume} download="BergeronResume">
              resume
            </a>
            .
          </p>

          <h4>
            Links:
            <a
              className="outside-links"
              href="https://github.com/Joshua-Bergeron"
              target="_blank"
            >
              Github
            </a>
            <a
              className="outside-links"
              href="https://www.linkedin.com/in/joshua-luc-bergeron/"
              target="_blank"
            >
              Linkedin
            </a>
          </h4>

          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            name="message"
            id="message"
            value={formState.message}
            cols="20"
            rows="8"
            onChange={handleChange}
            required
          ></textarea>
          <p className="characters" id="result">
            0/1000
          </p>
          <button type="submit" className="sendBtn">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Form;
