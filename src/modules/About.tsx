import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import lambdaLogo from '../../public/icons/awsLambda.svg'
import reactLogo from '../../public/icons/react.svg'
import serverlessLogo from '../../public/icons/serverless.svg'
import typescriptLogo from '../../public/icons/typescript.svg'
import materialUILogo from '../../public/icons/materialUI.svg'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function About(props: any) {
  const styles = props.styles;
  return (
    <Collapse in={styles.display} orientation={styles.orientation} timeout={600} data-testid='About'>
      <ThemeProvider theme={theme}>
        <Paper elevation={8} sx={{ bgcolor: '#495a81', height: styles.height, margin: styles.margin, borderRadius: '10px', padding: styles.padding, width: styles.width, overflow: styles.overflow}}>
          <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>About this App</Typography>
          <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
          {/* <Box sx={{ bgcolor: '#546da6', height: 'auto', padding: '10px 20px', margin: '20px 0' }}> */}
            <div className='logos'>
              <Link href='https://aws.amazon.com/lambda/' target='_blank'>
                <img src={lambdaLogo} alt='AWS Lambda Logo' style={{width: styles.iconSize, height: styles.iconSize}}></img>
              </Link>
              <Link href='https://reactjs.org/' target='_blank'>
                <img src={reactLogo} alt='React Logo' style={{width: styles.iconSize, height: styles.iconSize}}></img>
              </Link>
              <Link href='https://www.serverless.com/' target='_blank'>
                <img src={serverlessLogo} alt='Serverless Logo' style={{width: styles.iconSize, height: styles.iconSize}}></img>
              </Link>
              <Link href='https://www.typescriptlang.org/' target='_blank'>
                <img src={typescriptLogo} alt='Typescript Logo' style={{width: styles.iconSize, height: styles.iconSize}}></img>
              </Link>
              <Link href='https://mui.com/' target='_blank'>
                <img src={materialUILogo} alt='Material-UI Logo' style={{width: styles.iconSize, height: styles.iconSize}}></img>
              </Link>
            </div>
            {/* <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '5px 0 10px 0'}}/> */}
            <Typography variant='body1' component='div' sx={{ color: '#cfe6fa', textAlign: 'left' }}>
            &emsp; I created this portfolio app to showcase my skills as a software engineer and to explore some cool technologies that I’ve been interested in but haven’t had the chance to work with. Those being <b>Typescript</b>, <b>AWS Lambda</b>, and <b>MUI</b>.
              <br/><br/>
              &emsp; <b>Typescript</b> is basically <b>JavaScript</b> but with additional features. Some of these have helped make errors in my code more obvious, which reduced the time I spend debugging. <b>AWS Lambda</b> (with the use of <b>S3 buckets</b> and <b>Serverless</b>) allowed me to launch this app without the use of servers! This sidesteps a few of the pain points associated with a traditional server setup. And <b>MUI</b> is a <b>React</b> component library that gives me the tools to neatly organize and present my app.
              <br/><br/>
              &emsp; To launch my serverless React app quickly, I followed an article created by&nbsp;
              <Link href='https://medium.com/bcgdv-engineering/production-ready-react-js-web-app-on-aws-lambda-in-15-minutes-or-less-f9d5c6a36ea8' sx={{ color: '#cfe6fa', textDecorationColor: '#cfe6fa' }} target='_blank'>
                <b>Andre Rabold</b>
              </Link>
              &nbsp;that details a simple step-by-step process using a template he created. Thanks Andre!
            </Typography>
          {/* </Box> */}
        </Paper>
      </ThemeProvider>
    </Collapse>
  )
}