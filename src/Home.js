import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Chibi from './images/thomas-animation.gif';
import { Typography } from '@material-ui/core';
import {useTheme} from './ThemeProvider';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    titleRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "90vw",
        margin: "20px"
    }
}));

export default function Home() {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <div className={classes.content}>  
            <Fade in={true} timeout={1500}>
                <Typography variant="h4" className={theme.title} >Home</Typography>
            </Fade>
            <Slide direction="left" in={true} timeout={1500} mountOnEnter unmountOnExit >
                <figure>
                    <img alt="Thomas" src={Chibi} height="300" />
                    <figcaption style={{fontSize: 10, color: "white"}}>Credit to <a style={{color: "white"}} href="https://chiru-illustrations.carrd.co/" rel="noreferrer" target="_blank">Chiru</a> for the drawing.</figcaption>
                </figure>
            </Slide>
            <Slide direction="up" in={true} timeout={1000} style={{ transitionDelay: '500ms'}} mountOnEnter unmountOnExit>
                <Card className={theme.mainCard}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h4" component="h3">Oh, hello there!</Typography> <br />
                        <Box textAlign="center">
                            Welcome to my website. I am Thomas Vy, the creator of this website. This website was created with React.
                            I am a Calgary based programmer with a passion for learning the unknown.
                        </Box>
                    </Box>
                </Card>
            </Slide>
        </div>    

    )
}
