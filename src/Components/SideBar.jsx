import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import { Avatar, styled, Tooltip, Typography, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, MapOutlined, PeopleAltOutlined, PersonOutline, PieChartOutline, ReceiptOutlined, TimelineOutlined, TimerOutlined, } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
const drawerWidth = 240;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});





const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Array1 = [{
  text: "Dashboard",
  icon: <HomeOutlinedIcon />,
  path: "/"
},
{
  text: "Manage Team",
  icon: <PeopleAltOutlined />,
  path: "/team"
},
{
  text: "Contact Information",
  icon: <ContactsOutlined />,
  path: "/contacts"
},
{
  text: "Invoices Balance",
  icon: <ReceiptOutlined />,
  path: "/invoices"
},
];

const Array2 = [
  { text: "Profile Form", icon: <PersonOutline />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlined />,
    path: "/faq",
  },
];
const Array3 = [
  { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutline />, path: "/pie" },
  { text: "Line Chart", icon: <TimerOutlined />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
];


const SideBar = ({ open, handleDrawerClose }) => {
  let location = useLocation()
  const navigate = useNavigate()
  const theme = useTheme();
  return (
    <Drawer sx={{
      '& .MuiDrawer-paper': {
        overflow: open ? "auto" : 'hidden',
      },
    }} variant="permanent" open={open} >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar sx={{
        mx: "auto",
        width: open ? 88 : 44,
        height: open ? 88 : 44,
        my: 1, border: "2px solid grey",
        transition: "0.25s"
      }} alt="Remy Sharp" src='./../../public/ziad.jpg' />
      <Typography align='center' sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}  >Ziad Khaled</Typography>
      <Typography align='center' sx={{ fontSize: open ? 15 : 0, transition: "0.25s", color: theme.palette.info.main }}  >Admin</Typography>



      <Divider />




      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>

            <Tooltip title={open ? null : item.text} placement='left'>

              <ListItemButton
                onClick={() => {
                  navigate(item.path)

                }
                }
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[400] : null
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>


      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>


            <Tooltip title={open ? null : item.text} placement='left'>
              <ListItemButton
                onClick={() => {
                  navigate(item.path)

                }
                }
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[400] : null
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>
            </Tooltip>

          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>

            <Tooltip title={open ? null : item.text} placement='left'>
              <ListItemButton
                onClick={() => {
                  navigate(item.path)

                }
                }
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[400] : null
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>
            </Tooltip>

          </ListItem>
        ))}
      </List>


    </Drawer>
  )
}

export default SideBar