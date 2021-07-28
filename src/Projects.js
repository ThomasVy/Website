import Box from '@material-ui/core/Box';
import React from 'react';
import Project from './Project';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from './ThemeProvider';
import { allProjects } from './projects.json';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        maxWidth: '900px' 
    }
}));

export default function Projects() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <Typography variant="h4" className={theme.title}>Projects</Typography>
            <Box style={{margin: '20px'}} color="white">
                These are a couple of my favorite projects. 
                Checkout my <a href="https://github.com/ThomasVy" style={{color: "#D3D3D3"}}>
                    GitHub
                </a> for more of my projects.
            </Box>
            <div className={classes.container}>
                {console.log(allProjects)}
                {allProjects.map((project, projectIdx) => <Project key={projectIdx} project={project}/>)}
            </div>
        </>
    )
}
