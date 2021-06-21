import React from 'react'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export default function Projects() {
    return (
        <>
            <h2>Projects</h2>
            <Box textAlign="justify" m={2}>
                These are a couple of my favorite projects. Checkout my <a href="https://github.com/ThomasVy">GitHub</a> for more of my projects.
            </Box>
            <Paper>
                <Box textAlign="justify" m={2}>
                    1. <a href="https://github.com/ThomasVy/MoshirLearning">MoshirLearning</a>
                </Box>
                <Box textAlign="justify" m={2}>
                    2. <a href="https://github.com/ThomasVy/TicTacToe-Game">TicTacToe Game</a>
                </Box>
                <Box textAlign="justify" m={2}>
                    3. <a href="https://github.com/ThomasVy/Spaceship-game">Spaceship Game</a>
                </Box>
                <Box textAlign="justify" m={2}>
                    4. <a href="https://github.com/ThomasVy/Earth-Simulation">Earth-Simulation</a>
                </Box>
                <Box textAlign="justify" m={2}>
                    5. <a href="https://github.com/ThomasVy/BookExchange">Book Exchange</a>
                </Box>
                <Box textAlign="justify" m={2}>
                    6. <a href="https://github.com/ThomasVy/RayTracingScenes">Ray Tracing Scenes</a>
                </Box>
                <Box textAlign="justify" m={2}>
                    7. <a href="https://github.com/ThomasVy/Billiard-Game">Billiard Game</a>
                </Box>
                <Box textAlign="justify" m={2}>
                    8. <a href="https://github.com/ThomasVy/Shape-Rendering">Shape Rendering</a>
                </Box>
                <Box textAlign="justify" m={2}>
                    9. <a href="https://github.com/ThomasVy/P2P-Messaging-App">Peer-to-Peer Messaging App</a>
                </Box>
            </Paper>
        </>
    )
}
