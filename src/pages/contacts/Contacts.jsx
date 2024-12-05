import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box } from "@mui/material";
import { columns, rows } from './data';
import Header from '../../Components/Header';


const Contacts = () => {
  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
        <Header
        Title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <DataGrid
      slots={{
        toolbar:GridToolbar,
      }}

      rows={rows} columns={columns} autoHeight />
    </Box>
  )
}

export default Contacts