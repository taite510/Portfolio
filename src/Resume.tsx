import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SchoolIcon from '@mui/icons-material/School';
import resumeData from './resumeData';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import CodeIcon from '@mui/icons-material/Code';

function mapResume(type: any) {
  let arr = type.map((data: any) => {
    return (
      <Box sx={{padding: '12px', margin: '12px 6px', borderStyle: 'double', borderColor: '#0a1f3d'}}>
        <Typography variant='h6' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>{data.title}</Typography>
        <Typography variant='caption' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left', fontStyle: 'italic'}}>{data.caption}</Typography>
        <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '5px 0 10px 0'}}/>
        <Typography variant='body2' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>{data.description}</Typography>
      </Box>
    )
  })
  return arr;
}
const education = mapResume(resumeData.education)
const experience = mapResume(resumeData.experience)
const projects = mapResume(resumeData.projects)

export default function Resume(props: any) {

  function onDownload() {
    const link = document.createElement("a");
    link.download = `Tatie Jernigan Resume.docx`;
    link.href = "./Taite Jernigan Resume.docx";
    link.click();
  }

  return (
    <Box sx={{ bgcolor: '#495a81', height: '665px', margin: props.styles.margin, borderRadius: '10px', padding: '30px', width: props.styles.width, overflow: 'auto'}}>
      <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>Resume</Typography>
      <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
      <Button onClick={onDownload} sx={{ color: '#ddefff', marginTop: '5px'}}>
        <FileDownloadIcon/>
        Download My Resume
      </Button>
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
    </Box>
  )
}