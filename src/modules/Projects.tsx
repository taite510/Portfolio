import React, { useState } from 'react';
import ProjectImageList from './ProjectImageList'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import ConstructionIcon from '@mui/icons-material/Construction';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import EditIcon from '@mui/icons-material/Edit';
import pictures from '../../public/data/photoData';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

let projectPics = pictures.projects

export default function About(props: any) {
  const [open, setOpen] = useState({img: 'none', isOpen: false})

  const handleOpen = (event: any) => {
    setOpen({img: event.currentTarget.children[0].id, isOpen: true})
  }
  const handleClose = () => {
    setOpen({img: 'none', isOpen: false})
  }
  const styles = props.styles;
  return (
    <Collapse in={styles.display} orientation={styles.orientation} timeout={600} data-testid='Projects'>
      <ThemeProvider theme={theme}>
        <Paper elevation={8} sx={{ bgcolor: '#495a81', height: styles.height, margin: styles.margin, borderRadius: '10px', padding: styles.padding, width: styles.width, overflow: styles.overflow}}>
          <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>Projects</Typography>
          <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
          <Typography variant='h5' component='div' sx={{ color: '#86c7ff', textAlign: 'left', margin: '20px 0 5px 0' }}>
            <ShoppingBagIcon fontSize='large' sx={{ verticalAlign: 'bottom'}}/>
            &nbsp; Project Catwalk
          </Typography>
          <ProjectImageList handleOpen={handleOpen} project={'catwalk'}/>
          <Typography variant='body1' component='div' sx={{ color: '#cfe6fa', textAlign: 'left'}}>
          &emsp; For this project, I collaborated with a small team of engineers to create a fashion e-commerce site using <b>React</b>, <b>Node</b>, and <b>MySQL</b>. I was tasked with designing and implementing the frontend for the review section and the backend for the products section. The frontend was straightforward: process and display review metadata in a format that users could easily interpret and allow users to create their own reviews.
          <br/><br/>
          &emsp; The backend was a bit more interesting. I had endpoints that required multiple queries to different tables, returning the data in a complex nested form. Optimizing those endpoints down to only one query took effort and research along with a healthy dose of trial and error. The end result was a significant performance increase when stress testing.
          </Typography>
          <Typography variant='h5' component='div' sx={{ color: '#86c7ff', textAlign: 'left', margin: '20px 0 5px 0' }}>
            <EditIcon fontSize='large' sx={{ verticalAlign: 'bottom'}}/>
            &nbsp; study.io
          </Typography>
          <ProjectImageList handleOpen={handleOpen} project={'studyIO'}/>
          <Typography variant='body1' component='div' sx={{ color: '#cfe6fa', textAlign: 'left'}}>
          &emsp;Study.io is an app that allows users to form or find study groups with others under any educational topic. I worked mainly on the backend for this project, leading a team of engineers to build out our API using <b>Express</b> and <b>PostgreSQL</b> while another team built the frontend. My past experience with SQL queries was helpful here, as we needed to flesh out over 25 different endpoints for our frontend team to use. The most interesting aspect of the backend to me was designing an authorization system to encrypt/salt a user's sensitive information with <b>Node???s</b> crypto module.
          <br/><br/>
          &emsp;Near the end of the project I worked on improving our app???s frontend performance. One of the techniques I used was adding text compression to our app, which reduced our time to first contentful paint from 3.9 to 1.3 seconds.
          </Typography>
        </Paper>
        <Modal open={open.isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: styles.picModalWidth, height: 'auto' }}>
              <ImageListItem>
                    <img src={(projectPics as any)[open.img].link} alt={(projectPics as any)[open.img].title}/>
                  </ImageListItem>
            </Box>
        </Modal>
      </ThemeProvider>
    </Collapse>
  )
}