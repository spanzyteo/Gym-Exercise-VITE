import React from 'react'
import {
  Box,
  Typography,
  Stack,
  TextField,
  Container,
  Button,
} from '@mui/material'

const CalculateBanner = ({ weight, setWeight, height, setHeight, bmiData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
  }
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
            onChange={(e) => setHeight(e.target.value)}
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
          <Typography variant="h5">Result:</Typography>
          <Typography variant="body1">BMI: {bmiData.bmi}</Typography>
          <Typography variant="body1">Category: {bmiData.category}</Typography>
        </Box>
      )}
    </Box>
  )
}

export default CalculateBanner
