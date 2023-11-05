import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: { sm: '20vw', xs: '40vw' },
        height: { sm: '20vw', xs: '40vw' },
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ gap: { sm: '10px', xs: '5px' } }}
      >
        <img
          src={Icon}
          alt="dumbbell"
          style={{
            width: '40px',
            height: '40px',
          }}
        />
        <Typography
          fontSize={{ sm: '24px', xs: '18px' }}
          fontWeight="bold"
          color="#3A1212"
          textTransform="capitalize"
        >
          {item}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default BodyPart
