import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'

import CalculatorBanner from '../components/CalculatorBanner'
import CalculateBanner from '../components/CalculateBanner'
import { calculateOptions, fetchData } from '../utils/fetchData'

const BodyCalculator = () => {
  // const [bodyType, setBodyType] = useState(null)
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')

  return (
    <Box>
      <CalculatorBanner />
      <Box sx={{ flexDirection: { lg: 'row', xs: 'column' } }}>
        <CalculateBanner
          weight={weight}
          setWeight={setWeight}
          age={age}
          setAge={setAge}
          // fetchBodyType={fetchBodyType}
        />
      </Box>
    </Box>
  )
}

export default BodyCalculator
