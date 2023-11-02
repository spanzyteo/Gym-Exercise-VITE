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
  const [bmiData, setBmiData] = useState(null)
  const [weight, setWeight] = useState('')
  const [weightError, setWeightError] = useState('')
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
        if (height === '') {
          setHeightError('Please input Height value')
        } else {
          setHeight('')
          setHeightError('Height must be between 130 to 230 kg')
        }
      }
      if (weight >= 40 && weight <= 160) {
        setWeightError('')
      } else {
        if (weight === '') {
          setWeightError('Please input Weight value')
        } else {
          setWeight('')
          setWeightError('Weight must be between 40 to 160 kg')
        }
      }
      if (age === '') {
        setAgeError('Please input Age value')
      }
      if (
        !!age &&
        height >= 130 &&
        height <= 230 &&
        weight >= 40 &&
        weight <= 160
      ) {
        await fetchBodyType()
      }
      setTimeout(() => {
        setWeightError(null)
        setHeightError(null)
        setAgeError(null)
      }, 3000)
    } catch (error) {
      console.error(error)
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
            error={!!weightError}
            helperText={weightError}
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
            error={!!heightError}
            helperText={heightError}
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
        <Box
          sx={{
            marginTop: '20px',
            bgcolor: '#ff2625',
            width: '330px',
            p: '9px',
            borderRadius: '8px',
            opacity: '0.4',
          }}
        >
          <Typography variant="h5" fontWeight={700} color="#ffff">
            Result
          </Typography>
          <Typography variant="h6" color="#ffff">
            BMI: {bmiData.data.bmi}
          </Typography>
          <Typography variant="h6" color="#ffff">
            Health: {bmiData.data.health}
          </Typography>
          <Typography variant="h6" color="#ffff">
            Healthy BMI Range: {bmiData.data.healthy_bmi_range}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default CalculateBanner
