import React, { useState } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchedExercises from '../components/SearchedExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchedExercises />
      <Exercises />
    </Box>
  )
}

export default Home
