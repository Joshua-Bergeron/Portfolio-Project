import Wrapper from '../assets/wrappers/FormSubmitPage';
import { useNavigate } from 'react-router-dom';

const FormSubmitted = () => {
  const navigate = useNavigate();

  const onClick = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <Wrapper>
      <div>
        <h1>
          Your form was&nbsp;<span>successfully</span>&nbsp;submitted!
        </h1>
      </div>
      <p>
        Thank you for taking the time to get in contact with me. If you had any
        questions, I will be sure to get back to you ASAP.
      </p>

      <button type="submit" className="sendBtn" onClick={onClick}>
        Return to Home
      </button>
    </Wrapper>
  );
};

export default FormSubmitted;
