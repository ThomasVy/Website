import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#1C1C1C"
    },
    drawerContainer: {
        padding: "3px 20px",
    },
    drawer: {
        backgroundColor: '#1C1C1C'
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        color: "white",
        '&:hover': {
            backgroundColor: "#252525"
        }
    },
    logo: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 800,
    },
    toolbar: {
        display: "flex",
    },
}));


export default function NavBar() {
    const classes = useStyles();
    const [mobileView, setMobileView] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const headersData = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Projects",
            href: "/projects"
        },
        {
            label: "About Me",
            href: "/about"
        },
        {
            label: "Resume",
            href: "/resume"
        },
        {
            label: "Contact Info",
            href: "/contact"
        },
    ];
    const displayDesktop = () => {
        const getMenuButtons = () => {
            return headersData.map(({ label, href }) => {
              return (
                <Button
                    key={label}
                    color="inherit"
                    to={href}
                    component={Link}
                    className={classes.menuButton}
                >
                  {label}
                </Button>
              );
            });
        };
        return (
          <Toolbar className={classes.toolbar}>
            <div className={classes.logo}>
                Thomas Vy
            </div>
            {getMenuButtons()}
          </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => setDrawerOpen(true);
        const handleDrawerClose = () => setDrawerOpen(false);
        const getDrawerChoices = () => {
            return headersData.map(({ label, href }) => {
                return (
                    <Link
                    
                        to={href}
                        key={label}
                        onClick={handleDrawerClose}
                        style={{textDecoration: 'none'}}
                    >
                        <MenuItem style={{marginLeft: "0"}} className={classes.menuButton}>{label}</MenuItem>
                    </Link>
                );
            });
        };

        return (
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    aria-haspopup="true"
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                    classes={{ paper: classes.drawer }}
                >
                    <div className={classes.drawerContainer}>
                    <IconButton
                    edge="start"
                    style={{color: "white"}}
                    onClick={handleDrawerClose}
                    >
                        <MenuIcon />
                    </IconButton>
                    {getDrawerChoices()}</div>
                </Drawer>
                <div className={classes.logo}>
                    Thomas Vy
                </div>
            </Toolbar>
            
        );
    };

    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 950
          ? setMobileView(true)
          : setMobileView(false);
      };
  
      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      }}, []);

      return (
        <header>
          <AppBar className={classes.header}>
            {mobileView ? displayMobile() : displayDesktop()}
          </AppBar>
        </header>
      );
}