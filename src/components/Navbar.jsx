import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Stack } from '@mui/material'

import logo from '../assets/assets/images/Logo.png'
import { Style } from '@mui/icons-material'

const Navbar = () => {
  const location = useLocation()
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '122px', xs: '5px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: '48px', height: '48px', margin: '0 20px' }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: location.pathname === '/' && '3px solid #FF2625',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </a>
        <Link
          to="/body-calculator"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom:
              location.pathname === '/body-calculator' && '3px solid #FF2625',
          }}
        >
          Body Calculator
        </Link>
      </Stack>
    </Stack>
  )
}

export default Navbar
