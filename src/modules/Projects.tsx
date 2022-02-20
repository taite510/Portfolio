import React, { useState }from 'react';
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
    <Collapse in={styles.display} orientation={styles.orientation} timeout={600}>
      <ThemeProvider theme={theme}>
        <Paper elevation={8} sx={{ bgcolor: '#495a81', height: styles.height, margin: styles.margin, borderRadius: '10px', padding: styles.padding, width: styles.width, overflow: styles.overflow}}>
          <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>Projects</Typography>
          <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
          <Typography variant='h5' component='div' sx={{ color: '#86c7ff', textAlign: 'left', margin: '20px 0 5px 0' }}>
            <ShoppingBagIcon fontSize='large' sx={{ verticalAlign: 'bottom'}}/>
            &nbsp; Project Catwalk
          </Typography>
          <ImageList
            gap={4}
            cols={3}
          >
            {Object.keys(projectPics).map(item => {
              if (item !== 'none') {
                return (
                  <ImageListItem key={item} onClick={handleOpen}>
                    <img
                      src={(projectPics as any)[item].img}
                      alt={(projectPics as any)[item].title}
                      id={item}
                      loading="lazy"
                    />
                      <ImageListItemBar
                        sx={{
                          background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={(projectPics as any)[item].title}
                        position='top'
                      >
                      </ImageListItemBar>
                  </ImageListItem>
                )
              }
            })}
          </ImageList>
          <Typography variant='h5' component='div' sx={{ color: '#86c7ff', textAlign: 'left', margin: '20px 0 5px 0' }}>
            <EditIcon fontSize='large' sx={{ verticalAlign: 'bottom'}}/>
            &nbsp; study.io
          </Typography>
          <ConstructionIcon sx={{fontSize: 60, margin: 'auto', color: '#86c7ff'}}/>
          <Typography variant='h6' sx={{color: '#86c7ff'}}>(under construction)</Typography>
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