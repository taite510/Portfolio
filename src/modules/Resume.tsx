import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SchoolIcon from '@mui/icons-material/School';
import resumeData from '../../public/data/resumeData';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import CodeIcon from '@mui/icons-material/Code';
import Link from '@mui/material/Link';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';

function mapResume(type: any) {
  let arr = type.map((data: any) => {
    return (
      <Box sx={{padding: '12px', margin: '12px 6px', borderStyle: 'double', borderColor: '#0a1f3d'}}>
        <Typography variant='h6' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>{data.title}</Typography>
        <Typography variant='caption' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left', fontStyle: 'italic'}}>{data.caption}</Typography>
        <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '5px 0 10px 0'}}/>
        <Typography variant='body2' component='div' sx={{ color: '#cfe6fa', textAlign: 'left' }}>{data.description}</Typography>
      </Box>
    )
  })
  return arr;
}
const education = mapResume(resumeData.education)
const experience = mapResume(resumeData.experience)
const projects = mapResume(resumeData.projects)

export default function Resume(props: any) {
  const styles = props.styles
  return (
    <Collapse in={styles.display} orientation={styles.orientation} timeout={600}>
      <Paper elevation={8} sx={{ bgcolor: '#495a81', height: styles.height, margin: styles.margin, borderRadius: '10px', padding: styles.padding, width: styles.width, overflow: styles.overflow}}>
        <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>Resume</Typography>
        <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
        <Link href='https://drive.google.com/uc?export=download&id=1cC2EDOjec1jofFEgM5wQDfEVSIUb9THw' download='Taite Jernigan Resume.pdf' underline='none'>
          <Button  sx={{ color: '#ddefff', marginTop: '5px'}}>
            <FileDownloadIcon/>
            Download My Resume
          </Button>
        </Link>
        <Typography variant='h5' component='div' sx={{ color: '#86c7ff', textAlign: 'left', margin: '20px 0 5px 0' }}>
          <SchoolIcon fontSize='large' sx={{ verticalAlign: 'bottom'}}/>
          &nbsp; Education
        </Typography>
        { education }
        <Typography variant='h5' component='div' gutterBottom sx={{ color: '#86c7ff', textAlign: 'left', margin: '30px 0 5px 0' }}>
          <DirectionsBoatIcon fontSize='large' sx={{ verticalAlign: 'bottom'}}/>
          &nbsp; Work Experience
        </Typography>
        { experience }
        <Typography variant='h5' component='div' gutterBottom sx={{ color: '#86c7ff', textAlign: 'left', margin: '30px 0 5px 0' }}>
          <CodeIcon fontSize='large' sx={{ verticalAlign: 'bottom'}}/>
          &nbsp; Projects
        </Typography>
        { projects }
      </Paper>
    </Collapse>
  )
}