import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useTheme } from '@mui/system';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const pages = ['My Resumes', 'Create', 'Log in', 'Sing Up'];
const links =["/resumes", "/create", "/login", "/register"];
const settings = ['Account', 'Logout'];

const MainAppBar = () => {
  const theme = useTheme();


  const { user: currentUser } = useSelector((state) => state.auth);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: theme.palette.primary.light, }}>
        <Toolbar disableGutters sx={{ md:"flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.primary.main,
              textDecoration: 'none',
            }}
          >
            CV BUILDER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } ,  }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: theme.palette.primary.main }}>My Resumes</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: theme.palette.primary.main }}>Create</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: theme.palette.primary.main }}>Log in</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: theme.palette.primary.main }}>Sing Up</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.primary.main,
              textDecoration: 'none',
            }}
          >
            CV BUILDER
          </Typography>
          <Box sx={{  display: { xs: 'none', md: 'flex', } }}>
          <Link style={{textDecoration: "none"}} to={"resumes"}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: theme.palette.primary.main , display: 'block' }}
                >
                  My Resumes
                </Button>
              </Link>
              <Link style={{textDecoration: "none"}} to={"/resume"} >
                <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: theme.palette.primary.main , display: 'block' }}
                >
                  Create
                </Button>
              </Link>
              {!currentUser &&
              <Link style={{textDecoration: "none"}} to={"/login"} >
                <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: theme.palette.primary.main , display: 'block' }}
                >
                  Log in
                </Button>
              </Link>
              }
              {!currentUser &&
              <Link style={{textDecoration: "none"}} to={"/register"}>
                <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: theme.palette.primary.main , display: 'block' }}
                >
                  Sing Up
                </Button>
              </Link>}
              {currentUser &&
              <Link style={{textDecoration: "none"}} to={"/register"}>
                <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: theme.palette.primary.main , display: 'block' }}
                >
                  Logout
                </Button>
              </Link>}
              
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainAppBar;
