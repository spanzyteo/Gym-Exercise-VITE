import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'

import CalculatorBanner from '../components/CalculatorBanner'
import CalculateBanner from '../components/CalculateBanner'
import { calculateOptions, fetchData } from '../utils/fetchData'

const BodyCalculator = () => {
  // const [bodyType, setBodyType] = useState(null)
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [heightError, setHeightError] = useState('')
  const [age, setAge] = useState('')
  const [bmiData, setBmiData] = useState('')

  console.log(bmiData)

  const fetchBodyType = async () => {
    const bmiCalculatorUrl = 'https://fitness-calculator.p.rapidapi.com'

    const bmiTypeData = await fetchData(
      `${bmiCalculatorUrl}/bmi?age=${age}&weight=${weight}&height=${height}`,
      calculateOptions
    )

    // console.log(bmiTypeData)

    setBmiData(bmiTypeData)
  }

  return (
    <Box>
      <CalculatorBanner />
      <Box sx={{ flexDirection: { lg: 'row', xs: 'column' } }}>
        <CalculateBanner
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
          age={age}
          setAge={setAge}
          bmiData={bmiData}
          fetchBodyType={fetchBodyType}
          heightError={heightError}
          setHeightError={setHeightError}
        />
      </Box>
    </Box>
  )
}

export default BodyCalculator
