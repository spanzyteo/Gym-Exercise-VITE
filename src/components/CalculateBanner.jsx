import React, { useState } from 'react'
import {
  Box,
  Typography,
  Stack,
  TextField,
  Container,
  Button,
} from '@mui/material'
import { fetchData, calculateOptions } from '../utils/fetchData'

const CalculateBanner = () => {
  const [height, setHeight] = useState('')
  const [heightError, setHeightError] = useState('')
  const [heightError2, setHeightError2] = useState('')
  const [bmiData, setBmiData] = useState('')
  const [weight, setWeight] = useState('')
  const [weightError, setWeightError] = useState('')
  const [weightError2, setWeightError2] = useState('')
  const [age, setAge] = useState('')
  const [ageError, setAgeError] = useState('')

  const fetchBodyType = async () => {
    const bmiCalculatorUrl = 'https://fitness-calculator.p.rapidapi.com'

    const bmiTypeData = await fetchData(
      `${bmiCalculatorUrl}/bmi?age=${age}&weight=${weight}&height=${height}`,
      calculateOptions
    )
    setBmiData(bmiTypeData)
  }

  const handleHeightChange = (e) => {
    const heightValue = parseInt(e.target.value)
    setHeight(heightValue)
  }

  const handleWeightChange = (e) => {
    const weightValue = parseInt(e.target.value)
    setWeight(weightValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (height >= 130 && height <= 230) {
        setHeightError('')
      } else {
        setHeight('')
        throw new Error('Height must be between 130 to 230 kg')
      }
      if (weight >= 40 && weight <= 160) {
        setWeightError('')
      } else {
        setWeight('')
        throw new Error('Weight must be between 40 to 160 kg')
      }

      await fetchBodyType()
    } catch (error) {
      setHeightError(error.message)
      setWeightError(error.message)
    }

    try {
      if (height === '') {
        throw new Error('Please input Height value')
      }
      setHeightError2(null)
      if (weight === '') {
        throw new Error('Please input Weight value')
      }
      setWeightError2(null)
      if (age === '') {
        throw new Error('Please input Age')
      }
    } catch (error) {
      setWeightError2(error.message)
      setHeightError2(error.message)
      setAgeError(error.message)
    }
  }
  console.log(bmiData)

  return (
    <Box sx={{ mt: { lg: '80px', xs: '20px' }, ml: { sm: '60px' } }}>
      <Typography variant="h3" fontWeight={700} mb="30px">
        BMI Calculator
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="start"
        >
          <TextField
            label="age"
            variant="outlined"
            margin="normal"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            error={!!ageError}
            helperText={ageError}
            color="primary"
          />
          <TextField
            label="weight (kg)"
            variant="outlined"
            margin="normal"
            type="number"
            value={weight}
            onChange={handleWeightChange}
            error={!!weightError || !!weightError2}
            helperText={weightError || weightError2}
            color="primary"
          />
          <TextField
            id="height"
            label="height (kg)"
            variant="outlined"
            margin="normal"
            type="number"
            value={height}
            onChange={handleHeightChange}
            error={!!heightError || !!heightError2}
            helperText={heightError || heightError2}
            color="primary"
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: '#ff2625', padding: '10px', mt: '20px' }}
          >
            Calculate BMI
          </Button>
        </Box>
      </form>

      {bmiData && (
        <Box sx={{ marginTop: '20px', bgcolor: 'ff2625' }}>
          <Typography variant="h5" fontWeight={700}>
            Result
          </Typography>
          <Typography variant="h6">BMI: {bmiData.data.bmi}</Typography>
          <Typography variant="h6">Health: {bmiData.data.health}</Typography>
          <Typography variant="h6">
            Healthy BMI Range: {bmiData.data.healthy_bmi_range}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default CalculateBanner
