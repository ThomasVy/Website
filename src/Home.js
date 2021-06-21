import React from 'react'
import { NavLink } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

export default function Home() {
    return (
        <>
            <h2>Home</h2>
            <Card>
                <Box textAlign="justify" m={2}>
                        Oh, hello there. Welcome to my website. I am Thomas Vy, the creator of this website. This website was created with React.
                        Here's a little brief introduction of myself:
                        I am a Calgary based programmer with a passion for learning the unknown. I love learning and passing my knowledge to others.
                </Box>
                <Box textAlign="justify" m={2}>
                    I was previously:
                    <ul>
                        <li>an employee of GEOSLOPE International Ltd.</li>
                        <li>a research assistant for Robotics and Sensor Network Group</li>
                        <li>a member of the University of Calgary's Solar Car Software Team</li>
                        <li>a member of the Schulich Unmanned Aerial Vehicle's Software Team</li>
                    </ul>
                </Box>
                <Box textAlign="justify" m={2}>
                    I have experience programming:
                    <ul>
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>Python 3</li>
                        <li>React/Javascript</li>
                        <li>SQL</li>
                        <li>NodeJS</li>
                        <li>Batch</li>
                        <li>Powershell</li>
                        <li>Bash</li>
                    </ul>
                    and some more technical skills that can be found on my resume.
                </Box>
                <Box textAlign="justify" m={2}>
                    <p>
                        For more information about me, check out the <NavLink to='/about'>About Me</NavLink> page.
                    </p>
                </Box>
            </Card>
        </>    

    )
}
