import './App.css';
import React, {useState, useEffect} from 'react';
import useConfig from './components/useConfig';
import Home from './modules/Home';
import Resume from './modules/Resume';
import Hobbies from './modules/Hobbies'
import About from './modules/About'
import Projects from './modules/Projects'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import myBackground from '../public/photos/background.webp'

export default function App() {
  const config = useConfig();
  const [page, setPage] = useState('Home')
  let flexDirection = 'row'
  let resumeStyles = {
    margin: '80px 5px',
    display: page === 'Resume'
  }
  let extraStyles = {
    display: page === 'Hobbies'
  }
  let homeStyles = {
    margin: '80px 5px'
  }
  let aboutStyles = {
    display: page === 'About'
  }
  let projectStyles = {
    display: page === 'Projects'
  }

  if (typeof window !== "undefined") {
    const [pageSize, setPageSize] = useState(window.innerWidth > 1260)
    const updateMedia = () => {
      setPageSize(window.innerWidth > 1260);
    };
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
    if (!pageSize) {
      flexDirection = 'column';
      resumeStyles.margin = '5px 0';
      homeStyles.margin = '80px 5px 5px 5px';
    }
  }

  function handleClick(event: any) {
    setPage(event.currentTarget.name)
  }

  return (
    <div className='App'>
      <img src={myBackground} id="bg" alt=""></img>
      <CssBaseline />
      <Container maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: flexDirection, justifyContent: 'center', alignItems: 'center'}}>
        <Home click={handleClick} styles={homeStyles}></Home>
        <Resume styles={resumeStyles}></Resume>
        <About styles={aboutStyles}></About>
        <Projects styles={projectStyles}></Projects>
        <Hobbies styles={extraStyles}></Hobbies>
      </Container>
    </div>
  );
}
