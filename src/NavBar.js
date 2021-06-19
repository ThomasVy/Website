import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";

export default function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/about">About Me</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/contact">Contact Info</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/resume">Resume</MenuItem>
                </Menu>
                <Typography variant="h6">
                    Thomas Vy's Website
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
