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
  bmiData,
  handleSubmit,
}) => {
  return (
    <Box sx={{ mt: { lg: '80px', xs: '20px' }, ml: { sm: '60px' } }}>
      <Typography variant="h3" fontWeight={700} mb="30px">
        BMI Calculator
      </Typography>
      <form onSubmit={handleSubmit}>
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
      </form>
    </Box>
  )
}

export default CalculateBanner
