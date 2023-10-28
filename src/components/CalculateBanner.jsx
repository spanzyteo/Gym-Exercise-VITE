import React, { useState } from 'react'
import {
  Box,
  Typography,
  Stack,
  TextField,
  Container,
  Button,
} from '@mui/material'

const CalculateBanner = ({ weight, setWeight, age, setAge }) => {
  const [height, setHeight] = useState('')
  const [heightError, setHeightError] = useState('')
  const [bmiData, setBmiData] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (height >= 130 && height <= 230) {
      setHeightError('')
      // setHeight(heightValue)
      fetchBodyType()
    } else {
      setHeight('')
      setHeightError('Height must be between 130 to 230 cm')
    }
    console.log(height)
    console.log(heightError)
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
            color="primary"
          />
          <TextField
            label="weight (kg)"
            variant="outlined"
            margin="normal"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
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
            // inputProps={{
            //   inputprops: {
            //     min: 130,
            //     max: 230,
            //   },
            // }}
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
        <Box sx={{ marginTop: '20px' }}>
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
