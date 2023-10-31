import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'

import CalculatorBanner from '../components/CalculatorBanner'
import CalculateBanner from '../components/CalculateBanner'

const BodyCalculator = () => {
  return (
    <Box>
      <CalculatorBanner />
      <Box sx={{ flexDirection: { lg: 'row', xs: 'column' } }}>
        <CalculateBanner />
      </Box>
    </Box>
  )
}

export default BodyCalculator
