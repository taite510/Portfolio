import './App.css';

import React, {useState} from 'react';

import useConfig from './components/useConfig';
import logo from './logo.svg';
import Home from './Home';
import Resume from './Resume';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



export default function App() {
  const config = useConfig();
  const [page, setPage] = useState('home')
  const buttonNames = ['Home', 'Resume', 'Extra']

  function handleClick(event: any) {
    setPage(event.currentTarget.name)
    console.log(page)
  }

  const buttons = buttonNames.map((b) => {
    return <Button onClick={handleClick} key={b} name={b} sx={{ bgcolor: '#617ec3', color: '#ddefff', height: '50px', fontSize: '18px', letterSpacing: '1px'}}>{b}</Button>
  });


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
      <Container maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <ButtonGroup
          orientation='vertical'
          aria-label='vertical outlined button group'
          variant='contained'
          sx={{ color: '#495a81', position: 'absolute', left: '-120px', width: '130px', height: 'auto' }}
        >
          {buttons}
        </ButtonGroup>
        <Home></Home>
        {page === 'resume' ? <Resume></Resume> : console.log('nothing')}
        <Resume></Resume>
      </Container>
    </div>
  );
}
