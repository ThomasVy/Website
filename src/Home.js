import React from 'react'
import { NavLink } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Chibi from './images/resize.jpg';
import { Typography } from '@material-ui/core';
import {useTheme} from './ThemeProvider';

export default function Home() {
    const theme = useTheme();
    return (
        <>
            <Card className={theme.title}>
                <Typography variant="h4">Home</Typography>
            </Card>
            <img src={Chibi} height="300" />
            <Card style={{maxWidth: "600px", padding: 10}}>
                <Typography variant="h4" component="h3">Oh, hello there...</Typography>
                <Box>
                        Welcome to my website. I am Thomas Vy, the creator of this website. This website was created with React.
                        Here's a little brief introduction of myself:
                        I am a Calgary based programmer with a passion for learning the unknown. I love learning and passing my knowledge to others.
                </Box>
                <Box>
                    I was previously:
                    <ul>
                        <li>an employee of GEOSLOPE International Ltd.</li>
                        <li>a research assistant for Robotics and Sensor Network Group</li>
                        <li>a member of the University of Calgary's Solar Car Software Team</li>
                        <li>a member of the Schulich Unmanned Aerial Vehicle's Software Team</li>
                    </ul>
                </Box>
                <Box>
                    I have experience programming:
                    <ul>
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>Python 3</li>
                        <li>React/Javascript</li>
                        <li>SQL</li>
                    </ul>
                    and some more technical skills that can be found on my resume.
                </Box>
                <Box>
                    <p>
                        For more information about me, check out the <NavLink to='/about'>About Me</NavLink> page.
                    </p>
                </Box>
            </Card>
        </>    

    )
}
