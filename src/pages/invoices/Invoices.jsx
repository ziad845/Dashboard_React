import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

import { Box } from "@mui/material";
import { columns, rows } from './data';
import Header from '../../Components/Header';


const Invoices = () => {
  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
       <Header Title="INVOICES" subTitle="List of Invoice Balances" />
      <DataGrid
      checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}

        rows={rows} columns={columns} autoHeight />
    </Box>
  )
}

export default Invoices