import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './assets/wrappers/Nav';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';
import FormSubmitted from './pages/FormSubmitted';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div>Home</div>
        </Link>
        <Link to="/aboutMe" style={{ textDecoration: 'none' }}>
          <div>About Me</div>
        </Link>
        <Link to="/resume" style={{ textDecoration: 'none' }}>
          <div>Resume</div>
        </Link>
        <Link to="/contactMe" style={{ textDecoration: 'none' }}>
          <div>Contact Me</div>
        </Link>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/formSubmitted" element={<FormSubmitted />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
