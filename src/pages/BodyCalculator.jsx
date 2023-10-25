import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'

import CalculatorBanner from '../components/CalculatorBanner'
import CalculateBanner from '../components/CalculateBanner'
import { calculateOptions, fetchData } from '../utils/fetchData'

const BodyCalculator = () => {
  // const [bodyType, setBodyType] = useState(null)
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmiData, setBmiData] = useState(null)

  useEffect(() => {
    const fetchBodyType = async () => {
      const bmiCalculatorUrl =
        'https://body-mass-index-bmi-calculator.p.rapidapi.com'

      const bmiTypeData = await fetchData(
        `${bmiCalculatorUrl}/metric?weight=${weight}&height=${height}`,
        calculateOptions
      )

      console.log(bmiTypeData.bmi)

      setBmiData(bmiTypeData)
    }

    fetchBodyType()
  }, [])

  return (
    <Box>
      <CalculatorBanner />
      <CalculateBanner
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        bmiData={bmiData}
      />
    </Box>
  )
}

export default BodyCalculator
