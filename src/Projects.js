import Box from '@material-ui/core/Box';
import React from 'react';
import Project from './Project';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from './ThemeProvider';
const arrayOfProjects = [
    {
        title:"Spaceship Game",
        software:"C++, OpenGL, Texture Mapping, Instancing, Shader programming, Matrix Manipulation",
        description:"Control a spaceship with WD key to move forward/back and mouse clicks to change the orientation of the ship. \
                     Gems randomly spawn on the map. Collect them all without touching the fires to win.",
        githubLink:"https://github.com/ThomasVy/Spaceship-game",
        video: 'Spaceship.mp4',
    },
    {
        title: 'MoshirLearning',
        software: 'Java, MySQL, TCP/UDP Sockets',
        description: '',
        githubLink: 'https://github.com/ThomasVy/MoshirLearning',
        video: null,
    },
    {
        title: 'TicTacToe Game',
        software: 'Java, TCP/UDP Sockets',
        description: '',
        githubLink: 'https://github.com/ThomasVy/TicTacToe-Game',
        video: null,
    },
    {
        title: 'Laravel Book Review',
        software: 'Laravel, HTML/CSS, PHP, MySQL',
        description: '',
        githubLink: 'https://github.com/ThomasVy/Laravel-Book-Review',
        video: null,
    },
    {
        title: 'Earth-Simulation',
        software: 'C++, OpenGL, Texture Mapping, Viewing Pipeline programming, Shader programming, Matrix Manipulation',
        description: '',
        githubLink: 'https://github.com/ThomasVy/Earth-Simulation',
        video: null,
    },
    {
        title: 'Book Exchange',
        software: 'PHP, MySQL, HTML/CSS',
        description: '',
        githubLink: 'https://github.com/ThomasVy/BookExchange',
        video: null,
    },
    {
        title: 'Peer-to-Peer Messaging App',
        software: 'Python 3, TCP/UDP Sockets, Concurrent programming, Distributed Systems',
        description: '',
        githubLink: 'https://github.com/ThomasVy/P2P-Messaging-App',
        video: null,
    },
    {
        title: 'Billiard Game',
        software: 'Processing',
        description: '',
        githubLink: 'https://github.com/ThomasVy/Billiard-Game',
        video: null,
    },
    {
        title: 'Ray Tracing Scenes',
        software: 'C++, OpenGL, Ray Tracing',
        description: '',
        githubLink: 'https://github.com/ThomasVy/RayTracingScenes',
        video: null,
    },
    {
        title: 'Shape Rendering',
        software: 'C++, OpenGL, Imgui',
        description: '',
        githubLink: 'https://github.com/ThomasVy/Shape-Rendering',
        video: null,
    },
];

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px'

    }
}));

export default function Projects() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <Card className={theme.title}>
                <Typography variant="h4">Projects</Typography>
            </Card>
            <Box>
                These are a couple of my favorite projects. Checkout my <a href="https://github.com/ThomasVy">GitHub</a> for more of my projects.
            </Box>
            <div className={classes.container}>
                {arrayOfProjects.map((project) => <Project key={project.title} project={project}/>)}
            </div>
        </>
    )
}
