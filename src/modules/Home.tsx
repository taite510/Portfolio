/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import myAvatar from '../../public/photos/taite.jpg'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function Home(props: any) {
  const buttonNames = ['Home', 'Resume', 'About', 'Projects', 'Extra']
  const buttons = buttonNames.map((b) => {
    return <Button onClick={props.click} key={b} name={b} sx={{ bgcolor: '#617ec3', color: '#ddefff', height: '50px', fontSize: '18px', letterSpacing: '1px'}}>{b}</Button>
  });

  return (
    <Paper elevation={8} sx={{ bgcolor: '#495a81', height: 'auto', width: '560px', margin: props.styles.margin, borderRadius: '10px', padding: '30px', position: 'relative'}}>
      <ButtonGroup
        orientation='vertical'
        aria-label='vertical outlined button group'
        variant='contained'
        sx={{ color: '#495a81', position: 'absolute', left: '-10.5%', top: '50px', width: 'min(140px, 26%)', height: 'auto', zIndex: 1}}
      >
        {buttons}
      </ButtonGroup>
      <Avatar alt='Taite Jernigan' src={myAvatar}  sx={{ width: '270px', height: '270px', margin: '10px auto 30px auto', border: '5px solid #546da6'}}/>
      <Typography variant='h3' component='div' sx={{color: '#cfe6fa'}}>
        Hi, I'm <b style={{color: '#000'}}>Taite Jernigan</b>
      </Typography>
      <Typography variant='h5' component='div' gutterBottom sx={{color: '#cfe6fa', fontStyle: 'italic'}}>
        web designer & developer
      </Typography>
      <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '30px 0'}}/>
      <Typography variant='body1' component='div' gutterBottom sx={{color: '#cfe6fa'}}>
        Former marine biologist / Bering Sea survivor turned webdev. <br/> I enjoy building React apps and designing backend architecture. <br/> Intrested in working together? Please contact me via email.
      </Typography>
      <Box sx={{ bgcolor: '#546da6', height: 'auto', borderRadius: '5px', padding: '10px', margin: '20px 0' }}>
        <Link href='mailto:taite5100@gmail.com' underline='none'>
          <Typography variant='subtitle1' component='div' sx={{color: '#e8f4ff', fontSize: '1.05rem'}}>
            email: taite5100@gmail.com
          </Typography>
        </Link>
      </Box>
      <Link href='https://github.com/taite510' target='_blank' sx={{color: '#09203d', margin: '0 20px'}}>
        <GitHubIcon fontSize='large'/>
      </Link>
      <Link href='https://www.linkedin.com/in/taite-jernigan/' target='_blank' sx={{color: '#09203d', margin: '0 20px'}}>
        <LinkedInIcon fontSize='large'/>
      </Link>
    </Paper>
  )
}