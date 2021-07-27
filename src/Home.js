import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Chibi from './images/resize.jpg';
import { Typography } from '@material-ui/core';
import {useTheme} from './ThemeProvider';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
        height: "80vh", 
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden"
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
            <div className={classes.titleRow}>
                <Fade in={true} timeout={1500}>
                    <Typography variant="h4" className={theme.title} >Home</Typography>
                </Fade>
                <Slide direction="left" in={true} timeout={1500} mountOnEnter unmountOnExit >
                    <img alt="Thomas" src={Chibi} style={{marginLeft: "50px"}} height="300" />
                </Slide>
            </div>
            <Slide direction="up" in={true} timeout={1000} style={{ transitionDelay: '500ms'}} mountOnEnter unmountOnExit>
                <Card className={theme.mainCard}>
                    <Typography variant="h4" component="h3">Oh, hello there...</Typography>
                    <Box>
                            Welcome to my website. I am Thomas Vy, the creator of this website. This website was created with React.
                            I am a Calgary based programmer with a passion for learning the unknown. I love learning and passing my knowledge to others.
                    </Box>
                </Card>
            </Slide>
        </div>    

    )
}
