import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import pictures from '../../public/data/photoData';

let projectPics = pictures.projects

export default function About(props: any) {

  return (
    <ImageList gap={4} cols={3}>
        {Object.keys(projectPics).map(item => {
          if (item !== 'none' && item[0] === props.project[0] && item[1] === props.project[1]) {
            return (
              <ImageListItem key={item} onClick={props.handleOpen}>
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
  )
}