import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Chibi from './images/resize.jpg';
import { Typography } from '@material-ui/core';
import {useTheme} from './ThemeProvider';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

export default function Home() {
    const theme = useTheme();
    return (
        <>  
            <Fade in="true" timeout={1500}>
                <Typography variant="h4" className={theme.title}>Home</Typography>
            </Fade>
            <Slide direction="up" in="true" timeout={1000} mountOnEnter unmountOnExit>
                <img src={Chibi} style={{margin: "20px"}} height="300" />
            </Slide>
            <Slide direction="up" in="true" timeout={1000} style={{ transitionDelay: '500ms'}} mountOnEnter unmountOnExit>
                <Card className={theme.mainCard}>
                        <Typography variant="h4" component="h3">Oh, hello there...</Typography>
                        <Box>
                                Welcome to my website. I am Thomas Vy, the creator of this website. This website was created with React.
                                Here's a little brief introduction of myself:
                                I am a Calgary based programmer with a passion for learning the unknown. I love learning and passing my knowledge to others.
                        </Box>
                </Card>
            </Slide>
        </>    

    )
}
