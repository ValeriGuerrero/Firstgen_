import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Navbar';
import FrontPic from './images/front.png';
import { Contact } from './Contact';
import Jobs from './Jobs';
import Scholarships from './Scholarships';
import SupportPrograms from './Supportprograms';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div>
            <h1 className='title'>FirstGen Pathways</h1>

            <img className='front' src={FrontPic} alt="Peaceful Protesters" />
            <div className='picBy'>
              <p>(Photo by Jacquelyn Jimenez Romero/Washington State Standard)</p>
              <p> Immigrant rights advocates were joined by several state lawmakers on a cold,
                cloudy day to advocate for bills supporting immigrants.</p>
            </div>
            <h2 className='aboutTitle'>About FirstGen Pathways </h2>
            <p className='about'>Our goal is to help college students reach their dreams of attending college.
              We understand the challenge that undocumented college students face, and we would like to help find a solution. If you are a student who needs assistance
              covering your college costs please take a look at our resources! </p>
          </div>
        } >
        </Route>
        <Route path='/contact' element={<Contact />} >
        </Route>
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
      <Routes>
        <Route path='/Scholarships' element={<Scholarships />} />
      </Routes>
      <Routes>
        <Route path='/SupportPrograms' element={<SupportPrograms />} />
      </Routes>

      <footer className='footer' >
        <span>&copy; 2025 FirstGen Pathways. All rights reserved.</span>
        <Link to="/contact">
          <h3 className="hover:underline">Contact Us</h3>
        </Link>
      </footer>
    </BrowserRouter >
  );
}
export default App;
