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
import pictures from '../../public/data/photoData';

let projectPics = pictures.projects

export default function About(props: any) {
  const [open, setOpen] = useState({img: 'none', isOpen: false})

  const handleOpen = (event: any) => {
    console.log(event.currentTarget.children[0].id)
    setOpen({img: event.currentTarget.children[0].id, isOpen: true})
  }
  const handleClose = () => {
    setOpen({img: 'none', isOpen: false})
  }

  return (
    <Collapse in={props.styles.display} orientation='horizontal' timeout={600}>
      <Paper elevation={8} sx={{ bgcolor: '#495a81', height: '723px', margin: props.styles.margin, borderRadius: '10px', padding: '30px', width: '560px', overflow: 'auto'}}>
        <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>Projects</Typography>
        <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
        <ImageList
          gap={4}
          cols={3}
        >
          {Object.keys(projectPics).map(item => {
            console.log(item)
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
        <ConstructionIcon sx={{fontSize: 60, margin: 'auto', color: '#86c7ff'}}/>
        <Typography variant='h6' sx={{color: '#86c7ff'}}>(under construction)</Typography>
      </Paper>
      <Modal open={open.isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto', height: 'auto' }}>
            <ImageListItem>
                  <img src={(projectPics as any)[open.img].link}/>
                </ImageListItem>
          </Box>
      </Modal>
    </Collapse>
  )
}