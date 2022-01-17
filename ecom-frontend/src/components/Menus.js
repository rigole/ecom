import React, {Fragment} from "react";
import {Link, Navigate, NavLink, withRouter} from "react-router-dom";
import Signin from "../user/Signin";
import {signout, isAuthenticated} from "../auth/helper"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Products', 'Category', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']



/*const currentTab = (history, path) => {

}*/
const Menus = ({history, path}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorUser] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget)
    }
    const handleCloseNavMenu =() => {
        setAnchorElNav(null)
    }
    const handleCloseUserMenu = () => {
        setAnchorUser(null)
    }

    return (
       /* <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Code Shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>

                        {!isAuthenticated() && (
                            <Fragment>
                                 <li className="nav-item">
                            <Link className="nav-link" to="/signin">Signin</Link>
                        </li>
                                <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                            </Fragment>
                        )}
                        { isAuthenticated() && (
                             <li className="nav-item">
                            <Link className="nav-link" to="/user/dashboard">DashBoard</Link>
                        </li>
                        )}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button">
                                Category
                            </a>
                            <div className="nav-link" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="">Web Applications</a>
                                <a className="dropdown-item" href="">Mobiles Applications</a>
                                <a className="dropdown-item" href="">Artificial intelligence</a>
                                <a className="dropdown-item" href="">Video Games</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="">Something else</a>
                            </div>
                        </li>
                    </ul>

                         <Link className="nav-link" to="/cart">Cart</Link>

                        {isAuthenticated() && (

                                 <Link className="nav-link" onClick={() => {signout(() => {<Navigate className="nav-link" to="/"/>})}}  to="/">
                                      Signout
                                </Link>

                        )}

                </div>
            </nav>
        </div>*/
<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            CODE-SHOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            CODE-SHOP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
           Products
              </Button>
               <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                   CAtegories
              </Button>


              { !isAuthenticated() && (
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                   <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
           Sign Up
              </Button>


                        <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
           Sign In
              </Button>


                      </Box>



     )}

          </Box>




             { isAuthenticated() && (
          <Box sx={{ flexGrow: 0 }}>


                        <Tooltip title="Open settings">
                          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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

                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>


                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>

                  <MenuItem  onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Account</Typography>
                 </MenuItem>


                <MenuItem  onClick={() => {signout(() => {<Navigate className="nav-link" to="/"/>})}}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>

            </Menu>


          </Box>
                  )}

              <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
           CART
              </Button>



        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default Menus