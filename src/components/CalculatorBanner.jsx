import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/assets/images/banner.png'

const CalculatorBanner = () => {
  const scroll = () => {
    window.scrollTo({ top: 1500, behavior: 'smooth' })
  }
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="700" fontSize="26px">
        Body Calculator
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mt="23px"
        mb="30px"
      >
        Fast and reliable way to <br />
        determine your body type
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Just input your measurements into the body shape <br /> calculator and
        let it classify your body type.
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{
          backgroundColor: '#ff2625',
          padding: '10px',
        }}
        onClick={scroll}
      >
        Calculate Body Type
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
        fontSize="150px"
      >
        Body Type
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default CalculatorBanner
