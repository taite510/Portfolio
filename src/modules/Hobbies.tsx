import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import pictures from '../../public/data/photoData';

let hobbyPics = pictures.hobbies

export default function Hobbies(props: any) {
  const [open, setOpen] = useState({img: 'none', isOpen: false})

  const handleOpen = (event: any) => {
    setOpen({img: event.currentTarget.children[0].id, isOpen: true})
  }
  const handleClose = () => {
    setOpen({img: 'none', isOpen: false})
  }
  const styles = props.styles
  return (
    <Collapse in={props.styles.display} orientation={styles.orientation} timeout={600}>
      <Paper elevation={8} sx={{ bgcolor: '#495a81', height: styles.height, margin: styles.margin, borderRadius: '10px', padding: '30px', width: styles.width, overflow: styles.overflow}}>
        <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>Hobbies</Typography>
        <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
        <Typography  component='p' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>
        When I was young, I could often be found looking for insects and other critters in backyards and local parks. Nowadays that interest has grown into a hobby of mine: <b>herping</b>. This term, which is derived from the word Herpetology, is the act of searching for reptiles and amphibians. Think of it like the snake/lizard version of birding. Below are some photos of mine that were taken while I was herping.
        <br/><br/>
        <b>Note:</b> the hardest part is actually <i>finding</i> them!

        </Typography>
        <ImageList
          gap={4}
          cols={2}
          variant='masonry'
        >
          {Object.keys(hobbyPics).map(item => {
            if (item !== 'none') {
              return (
                <ImageListItem key={item} onClick={handleOpen} >
                  <img
                    src={(hobbyPics as any)[item].img}
                    alt={(hobbyPics as any)[item].title}
                    id={item}
                    loading="lazy"
                  />
                    <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                      title={(hobbyPics as any)[item].title}
                      position='top'
                    >
                    </ImageListItemBar>
                </ImageListItem>
              )
            }
          })}
        </ImageList>
      </Paper>
      <Modal open={open.isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto', height: 'auto' }}>
            <ImageListItem>
                  <img src={(hobbyPics as any)[open.img].link}/>
                    <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                      title={(hobbyPics as any)[open.img].title}
                      position='top'
                    >
                    </ImageListItemBar>
                </ImageListItem>
          </Box>
      </Modal>
    </Collapse>
  )
}