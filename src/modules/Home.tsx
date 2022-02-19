import React from 'react';
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home(props: any) {
  const buttonNames = ['Home', 'Resume', 'About', 'Projects', 'Hobbies']
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: any) => {
    props.click(event)
    setAnchorEl(null);
  };
  const buttons = buttonNames.map((b) => {
    return <Button onClick={props.click} key={b} name={b} sx={{ bgcolor: '#617ec3', color: '#ddefff', height: '50px', fontSize: '18px', letterSpacing: '1px'}}>{b}</Button>
  });
  const menuItems = buttonNames.map((b) => {
    return <MenuItem onClick={handleClose} key={b} name={b}>{b}</MenuItem>
  })
  const styles = props.styles;
  return (
    <Paper elevation={8} sx={{ bgcolor: '#495a81', height: 'auto', width: styles.width, margin: styles.margin, borderRadius: '10px', padding: styles.padding, position: 'relative'}}>
      {props.display === 'browser' ?
        <ButtonGroup
          orientation='vertical'
          aria-label='vertical outlined button group'
          variant='contained'
          sx={{ color: '#495a81', position: 'absolute', left: '-10.5%', top: '50px', width: 'min(140px, 26%)', height: 'auto', zIndex: 1}}
        >
          {buttons}
        </ButtonGroup> :
        <>
          <Paper elevation={4} sx={{position: 'fixed', left: '0', bgcolor: '#617ec3', width: '75px', zIndex: 1}}>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
                <MenuIcon sx={{ fontSize: 40, color: '#09203d', verticalAlign: 'bottom'}}/>

            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              >
              {menuItems}
            </Menu>
          </Paper>
        </>
      }
      <Avatar alt='Taite Jernigan' src={myAvatar}  sx={{ width: 'clamp(220px, 60%, 270px)', height: 'clamp(220px, 50%, 270px)', margin: styles.avatarMargin, border: '5px solid #546da6'}}/>
      <Typography variant='h3' component='div' sx={{ size: styles.h3Size, color: '#cfe6fa'}}>
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
        <GitHubIcon sx={{fontSize: 40}}/>
      </Link>
      <Link href='https://www.linkedin.com/in/taite-jernigan/' target='_blank' sx={{color: '#09203d', margin: '0 20px'}}>
        <LinkedInIcon sx={{fontSize: 40}}/>
      </Link>
    </Paper>
  )
}