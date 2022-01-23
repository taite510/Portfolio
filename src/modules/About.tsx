import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import lambdaLogo from '../../public/icons/awsLambda.svg'
import reactLogo from '../../public/icons/react.svg'
import serverlessLogo from '../../public/icons/serverless.svg'
import typescriptLogo from '../../public/icons/typescript.svg'
import materialUILogo from '../../public/icons/materialUI.svg'


export default function About(props: any) {
  return (
    <Collapse in={props.styles.display} orientation='horizontal' timeout={600}>
      <Paper elevation={8} sx={{ bgcolor: '#495a81', height: '723px', margin: props.styles.margin, borderRadius: '10px', padding: '30px', width: '560px', overflow: 'auto'}}>
        <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>About this App</Typography>
        <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
        <div className='logos'>
          <img src={lambdaLogo} alt='AWS Lambda Logo'></img>
          <img src={reactLogo} alt='React Logo'></img>
          <img src={serverlessLogo} alt='Serverless Logo'></img>
          <img src={typescriptLogo} alt='Typescript Logo'></img>
          <img src={materialUILogo} alt='Material-UI Logo'></img>
        </div>
        <Typography variant='body1' component='div' sx={{ color: '#cfe6fa', textAlign: 'left' }}>
          Some text goes here
        </Typography>
      </Paper>
    </Collapse>
  )
}