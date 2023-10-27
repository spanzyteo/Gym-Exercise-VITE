import React from 'react'
import {
  Box,
  Typography,
  Stack,
  TextField,
  Container,
  Button,
} from '@mui/material'

const CalculateBanner = ({
  weight,
  setWeight,
  height,
  setHeight,
  age,
  setAge,
  bmiData,
  fetchBodyType,
  heightError,
  setHeightError,
}) => {
  const handleHeightChange = (event) => {
    const enteredValue = event.target.value
    if (enteredValue >= 130 && enteredValue <= 230) {
      setHeight(enteredValue)
      setHeightError('')
    } else {
      setHeight('')
      setHeightError('Height must be between 130 to 230 cm')
    }
  }

  const handleSubmit = async (e) => {
    // console.log('form submitted')
    e.preventDefault()
    fetchBodyType()
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
            label="height (kg)"
            variant="outlined"
            margin="normal"
            type="number"
            value={height}
            onChange={handleHeightChange}
            error={!!heightError}
            helperText={heightError}
            inputProps={{
              inputProps: {
                min: 130,
                max: 230,
              },
            }}
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
