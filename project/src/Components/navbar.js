import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PersonIcon from '@mui/icons-material/Person';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AssessmentIcon from '@mui/icons-material/Assessment';
import './table.css';
import ApartmentIcon from '@mui/icons-material/Apartment';

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function TemporaryDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const settings = ['Profile', 'Account', 'Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div id="App-bar">
          <Typography variant="h5" noWrap component="div" href="./Components/App.js" id ="App-header">
            Child Health Tracking System
          </Typography>
          </div>
        </Toolbar>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} id="user">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/Dashboard" >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText  primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="/ChildList">
              <ListItemIcon>
              <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText primary="Children List" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="/ScreeningList">
              <ListItemIcon>
                <MonitorHeartIcon/>
              </ListItemIcon>
              <ListItemText primary="Screening" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="/UserList">
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="User List" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="/HealthcardList">
              <ListItemIcon>
                <MedicalInformationIcon />
              </ListItemIcon>
              <ListItemText primary="Child Healthcard" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="/SchoolList">
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary="School List" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="/Report">
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
      </Box>
      
    </Box>
  );
}
