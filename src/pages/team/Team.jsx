import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { rows } from './data';
import { useTheme } from '@mui/material';
import { Box, Typography } from "@mui/material";
import Header from '../../Components/Header';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material"





const Team = () => {
  const theme = useTheme()
  const columns = [
    { field: 'id', headerName: 'ID', width: 33, align: "center", headerAlign: "center" },
    { field: 'name', headerName: 'name', flex: 1, align: "center", headerAlign: "center" },
    { field: 'email', headerName: 'email', flex: 1, align: "center", headerAlign: "center" },
    { field: 'age', headerName: 'age', flex: 1, align: "center", headerAlign: "center" },
    { field: 'phone', headerName: 'phone', flex: 1, align: "center", headerAlign: "center" },
    {
      field: 'access', headerName: 'access', flex: 1, align: "center", headerAlign: "center", renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{
            p: "5px",
            width: "99px",
            borderRadius: "3px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            margin: "auto",


            backgroundColor: access === "Admin" ? theme.palette.primary.dark : access === "Manager" ? theme.palette.secondary.dark : "#3da58a",
          }} >
            {access === "Admin" && (<AdminPanelSettingsOutlined sx={{ color: "white" }} fontSize='small' />)}
            {access === "Manager" && (<SecurityOutlined sx={{ color: "white" }} fontSize='small' />)}
            {access === "User" && (<LockOpenOutlined sx={{ color: "white" }} fontSize='small' />)}
            <Typography sx={{ fontSize: "13px", color: "white" }}>{access}</Typography>
          </Box>
        )

      }
    },


  ];
  return (


    <Box sx={{ width: "100%", mx: "auto" }}>
      <Header Title={"TEAM"} subTitle={"Managing the Team Members"} />

      <DataGrid rows={rows} columns={columns} autoHeight />
    </Box>





  )
}

export default Team