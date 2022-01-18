import './App.css';

import React, {useState, useEffect} from 'react';

import useConfig from './components/useConfig';
import logo from './logo.svg';
import Home from './Home';
import Resume from './Resume';
import CssBaseline from '@mui/material/CssBaseline';

import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



export default function App() {
  const config = useConfig();
  const [page, setPage] = useState('Home')
  let flexDirection = 'row'
  let resumeStyles = {
    width: '50%',
    margin: '80px 0'
  }
  let homeStyles = {
    margin: '80px 10px'
  }
  if (typeof window !== "undefined") {
    // Client-side-only code
    const [pageSize, setPageSize] = useState(window.innerWidth > 1260)

    const updateMedia = () => {
      setPageSize(window.innerWidth > 1260);
    };

    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

    if (!pageSize && page !== 'Home') {
      flexDirection = 'column';
      resumeStyles.width = 'clamp(380px, 60%, 560px)';
      resumeStyles.margin = '5px 0';
      homeStyles.margin = '80px 0 5px 0'
    }
  }

  function handleClick(event: any) {
    setPage(event.currentTarget.name)
    console.log(page)
  }



  return (
    <div className='App'>
      <CssBaseline />
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to {config.app.TITLE}</h1>
        </header>
        <p className='App-intro'>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p> */}
      <Container maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: flexDirection, justifyContent: 'center', alignItems: 'center'}}>

        <Home click={handleClick} styles={homeStyles}></Home>
        {page === 'Resume' && <Resume styles={resumeStyles}></Resume>}
      </Container>
    </div>
  );
}
