import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Chibi from './images/resize.jpg';
import { Typography } from '@material-ui/core';
import {useTheme} from './ThemeProvider';

export default function Home() {
    const theme = useTheme();
    return (
        <>
            <Typography variant="h4" className={theme.title}>Home</Typography>
            <img src={Chibi} height="300" />
            <Card style={{maxWidth: "900px", padding: 10}}>
                <Typography variant="h4" component="h3">Oh, hello there...</Typography>
                <Box>
                        Welcome to my website. I am Thomas Vy, the creator of this website. This website was created with React.
                        Here's a little brief introduction of myself:
                        I am a Calgary based programmer with a passion for learning the unknown. I love learning and passing my knowledge to others.
                </Box>
            </Card>
        </>    

    )
}
