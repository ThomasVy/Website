import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    header: {
    },
    drawerContainer: {
        padding: "20px 30px",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
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
                Thomas Vy's Website
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
                        color="inherit"
                        style={{textDecoration: "none"}}
                        key={label}
                    >
                        <MenuItem>{label}</MenuItem>
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
                >
                    <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
                <div className={classes.logo}>
                    Thomas Vy's Website
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