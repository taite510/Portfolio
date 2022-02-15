import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import ConstructionIcon from '@mui/icons-material/Construction';


export default function About(props: any) {
  return (
    <Collapse in={props.styles.display} orientation='horizontal' timeout={600}>
      <Paper elevation={8} sx={{ bgcolor: '#495a81', height: '723px', margin: props.styles.margin, borderRadius: '10px', padding: '30px', width: '560px', overflow: 'auto'}}>
        <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>Projects</Typography>
        <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
        <ConstructionIcon sx={{fontSize: 60, margin: 'auto', color: '#86c7ff'}}/>
        <Typography variant='h6' sx={{color: '#86c7ff'}}>(under construction)</Typography>
      </Paper>
    </Collapse>
  )
}