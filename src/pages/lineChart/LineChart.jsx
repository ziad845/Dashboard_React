import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from '@mui/material'
import Line from './Line'
import Header from "../../components/Header";





const LineChart = () => {
  const theme = useTheme()
  return (
    <Box>
      <Header Title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>

  )
}

export default LineChart