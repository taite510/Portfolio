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


import pic1 from '../public/photos/pic1.webp';
import pic2 from '../public/photos/pic2.webp';
import pic3 from '../public/photos/pic3.webp';
import pic4 from '../public/photos/pic4.webp';
import pic5 from '../public/photos/pic5.webp';
import pic6 from '../public/photos/pic6.webp';

const picData = [
  {
    img: pic1,
    name: 'pic1',
    title: 'Rosy Boa',
  },
  {
    img: pic2,
    name: 'pic2',
    title: 'Long-nosed Snake',
  },
  {
    img: pic3,
    name: 'pic3',
    title: 'Speckled Rattlesnake',
  },
  {
    img: pic4,
    name: 'pic4',
    title: 'Citrus Cicada',
  },
  {
    img: pic5,
    name: 'pic5',
    title: 'Blainville\'s Horned Lizard',
  },
  {
    img: pic6,
    name: 'pic6',
    title: 'California Tree Frog',
  }
];

export default function Extra(props: any) {
  const [open, setOpen] = useState({img: 'nothing', isOpen: false})

  const handleOpen = (event: any) => {
    console.log('check')
    setOpen({img: event.currentTarget.id, isOpen: true})
  }
  const handleClose = () => {
    setOpen({img: 'nothing', isOpen: false})
  }
  return (
    <Collapse in={props.styles.display} orientation='horizontal' timeout={600}>
      <Paper elevation={8} sx={{ bgcolor: '#495a81', height: '723px', margin: props.styles.margin, borderRadius: '10px', padding: '30px', width: '560px', overflow: 'auto'}}>
        <Typography variant='h4' component='div' gutterBottom sx={{ color: '#cfe6fa', textAlign: 'left' }}>My Photos</Typography>
        <Divider variant='middle' sx={{borderBottomWidth: '1.5px', borderColor: '#0a1f3d', margin: '10px 0 10px 0'}}/>
        <ImageList
          gap={4}
          cols={2}
          variant='masonry'
        >
          {picData.map(item => {
            return (
              <ImageListItem key={item.img} onClick={handleOpen} >
                <img
                  src={item.img}
                  alt={item.title}
                  id={item.name}
                />
                  <ImageListItemBar
                    sx={{
                      background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    title={item.title}
                    position='top'
                  >
                  </ImageListItemBar>
              </ImageListItem>
            )
          })}
        </ImageList>
      </Paper>
      <Modal open={open.isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box>
          <img src='https://imgur.com/OQKhJSk.jpeg'></img>
        </Box>
      </Modal>
    </Collapse>
  )
}