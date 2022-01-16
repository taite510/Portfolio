/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import Button from '@mui/material/Button';
import { jsx, css } from '@emotion/react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import myAvatar from '../../public/photos/taite.jpg'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

export default function Home() {
  return (
    <React.Fragment>
      <Avatar alt='Taite Jernigan' src={myAvatar}  sx={{ width: 250, height: 250, margin: 'auto'}}/>
      <Typography variant='h3' component='div' sx={{color: '#cfe6fa'}}>
        Hi, I'm <b style={{color: '#09203d'}}>Taite Jernigan</b>
      </Typography>
      <Typography variant='h5' component='div' gutterBottom sx={{color: '#cfe6fa', fontStyle: 'italic'}}>
        web designer & developer
      </Typography>
      <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#434363', margin: '30px 0'}}/>
      <Typography variant='body1' component='div' gutterBottom sx={{color: '#cfe6fa'}}>
        Former marine biologist / Bering Sea survivor turned webdev. <br/> Enjoys building React apps and designing backend architecture. <br/> Please hire him.
      </Typography>
      <Box sx={{ bgcolor: '#546da6', height: 'auto', borderRadius: '5px', padding: '10px', margin: '20px 0' }}>
        <Typography variant='subtitle1' component='div' sx={{color: '#cfe6fa', fontSize: '1.05rem'}}>
          email: taite5100@gmail.com &nbsp;&nbsp;&nbsp;<b>/</b>&nbsp;&nbsp;&nbsp; phone: (562) 852-2919
        </Typography>
      </Box>
      <Link href='https://github.com/taite510' target='_blank' sx={{color: '#09203d', margin: '0 20px'}}>
        <GitHubIcon fontSize='large'/>
      </Link>
      <Link href='https://www.linkedin.com/in/taite-jernigan/' target='_blank' sx={{color: '#09203d', margin: '0 20px'}}>
        <LinkedInIcon fontSize='large'/>
      </Link>
    </React.Fragment>
  )
}