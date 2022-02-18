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
import { isMobile, isBrowser } from 'react-device-detect';


export default function App() {
  const config = useConfig();
  const [page, setPage] = useState('Home')
  const [display, setDisplay] = useState('browser')
  let styles = {
    browser: {
      flexDirection: 'row',
      allStyles: {
        width: '560px',
        height: '723px',
        margin: '80px 5px',
        overflow: 'auto',
        orientation: 'horizontal'
      },
      homeStyles: {

      },
      resumeStyles: {
        display: page === 'Resume'
      },
      aboutStyles: {
        display: page === 'About'
      },
      projectStyles: {
        display: page === 'Projects'
      },
      hobbyStyles: {
        display: page === 'Hobbies'
      }
    },
    mobile: {
      flexDirection: 'column',
      allStyles: {
        width: '100%',
        height: 'auto',
        margin: '40px 0 0 0',
        overflow: 'visible',
        orientation: 'vertical'
      },
      homeStyles: {

      },
      resumeStyles: {
        display: page === 'Resume'
      },
      aboutStyles: {
        display: page === 'About'
      },
      projectStyles: {
        display: page === 'Projects'
      },
      hobbyStyles: {
        display: page === 'Hobbies'
      }
    }
  }

  // if (typeof window !== "undefined") {
  //   const [pageSize, setPageSize] = useState(window.innerWidth > 1260)
  //   const updateMedia = () => {
  //     setPageSize(window.innerWidth > 1260);
  //   };
  //   useEffect(() => {
  //     window.addEventListener("resize", updateMedia);
  //     return () => window.removeEventListener("resize", updateMedia);
  //   });
  //   if (!pageSize) {
  //     flexDirection = 'column';
  //     resumeStyles.margin = '5px 0';
  //     homeStyles.margin = '80px 5px 5px 5px';
  //   }
  // }

  setTimeout(() => {
    if (isMobile && display === 'browser') {
      console.log('here')
      setDisplay('mobile')
    }
  })

  function handleClick(event: any) {
    setPage(event.currentTarget.name)
  }

  return (
    <div className='App'>
      <img src={myBackground} id="bg" alt=""></img>
      <CssBaseline />
      <Container maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: (styles as any)[display].flexDirection, justifyContent: 'center', alignItems: 'center'}}>
        <Home click={handleClick} styles={Object.assign((styles as any)[display].homeStyles, (styles as any)[display].allStyles)}></Home>
        <Resume styles={Object.assign((styles as any)[display].resumeStyles, (styles as any)[display].allStyles)}></Resume>
        <About styles={Object.assign((styles as any)[display].aboutStyles, (styles as any)[display].allStyles)}></About>
        <Projects styles={Object.assign((styles as any)[display].projectStyles, (styles as any)[display].allStyles)}></Projects>
        <Hobbies styles={Object.assign((styles as any)[display].hobbyStyles, (styles as any)[display].allStyles)}></Hobbies>
      </Container>
    </div>
  );
}
