import './App.css';

import * as React from 'react';

import useConfig from './components/useConfig';
import logo from './logo.svg';
import Home from './home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
/**
 * Our Web Application
 */

const buttonNames = ['Home', 'Resume', 'Extra']
const buttons = buttonNames.map((b) => {
  return <Button key={b} sx={{ bgcolor: '#617ec3', color: '#ddefff', height: '50px', fontSize: '18px', letterSpacing: '1px'}}>{b}</Button>
});

export default function App() {
  const config = useConfig();
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
      <Container maxWidth='sm' sx={{ position: 'relative' }}>
        <ButtonGroup
          orientation='vertical'
          aria-label='vertical outlined button group'
          variant='contained'
          sx={{ color: '#495a81', position: 'absolute', left: '-120px', width: '130px', height: 'auto' }}
        >
          {buttons}
        </ButtonGroup>
        <Box sx={{ bgcolor: '#495a81', height: 'auto', margin: '80px 0', borderRadius: '10px', padding: '10px' }}>
          <Home></Home>
        </Box>
      </Container>
    </div>
  );
}
