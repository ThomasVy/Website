import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import JapanImage from './images/resizedJapan.jpg';
import ProfessionPic from './images/resize.jpg';
import  { useTheme } from './ThemeProvider';
import { NavLink } from "react-router-dom";

export default function About() {
    const theme = useTheme();
    return (
        <>

            <Typography variant="h4" className={theme.title}>About Me</Typography>
            <Grid justify="center" container>
                <Grid item>
                    <CardMedia
                        component="img"
                        alt="Thomas Vy 1(Me)"
                        image={JapanImage}
                        title="Thomas Vy 1(Me)"
                    />
                </Grid>
                <Grid item>
                    <CardMedia
                        component="img"
                        alt="Thomas Vy 2(Me)"
                        image={ProfessionPic}
                        title="Thomas Vy 2(Me)"
                    />
                </Grid>
            </Grid>
            <Card Card style={{maxWidth: "900px", padding: 10}}>
                <Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" component="h1">
                        Who Am I?
                    </Box>
                    <Box>
                        I am a Chinese male born and raised in Calgary, AB, Canada. I love programming and learning 
                        about the unknown.
                        I graduated from the <a href="https://www.ucalgary.ca/">University of Calgary</a> in May 2021.
                        Before university, I graduated from John G. Diefenbaker high school and Sir John A. MacDonald junior high.
                    </Box>
                </Box>
                <Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" component="h1">
                        Why did I choose the path of Software Engineering?
                    </Box>
                    <Box>
                        Coming out of highschool, my sister recommended me to pursue a degree in Geology instead of very popular Engineering at the University of Calgary.
                        I decided to follow my sister's advice and apply to the University of Calgary for Geology.
                        After I completed my first year of university in Geology, I quickly found out I didn't have a passion for Geology.
                        I swiftly decided to transfer into Electrical Engineering, my backup plan in highschool. 
                    </Box>

                    <Box component="p">
                        In the first year of Engineering, regardless of which specialization (Mech, Software, Electrical, etc.), 
                        everyone has to complete the same first year courses, and at the end of first year,
                        everyone re-selects their specialization. 
                        I was thought that my first choice would be Electrical Engineering. However, I had this programming class, <a href='http://contacts.ucalgary.ca/info/enel/courses/f18/ENGG233'>ENGG 233</a>,
                        where we learned <a href='https://processing.org/'>Processing</a>. That class taught me the fundamentals of programming
                        and taught me how fun programming was. I had no prior experience with programming before that class, 
                        but after taking that course I immediately fell in love with programming. 
                        I created a <a href='https://github.com/ThomasVy/Billiard-Game'>billiard game</a> as the final project,
                        and I loved programming every bit of it. When I handed in the final project and finished the course, 
                        I was extremely sad that the programming class was over.
                        That was when I decided select Software Engineering as my first choice. I do not regret a thing. 
                    </Box>
                </Box>
                <Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" component="h1">
                        Education
                    </Box>
                    <Box>
                        Bachelor of Science in Software Engineering (September 2016 - May 2021)
                    </Box>
                    <Typography variant="body2" color="textSecondary">
                        University of Calgary
                    </Typography>
                    <Box>
                        &emsp;&emsp;Graduated with Internship 
                    </Box>
                    <Box>
                        &emsp;&emsp;Graduated with Distinctions (3.89 GPA)
                    </Box>
                </Box>
                <Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" component="h1">
                        Software Experience
                    </Box>
                    I was previously:
                    <ul>
                        <li>an employee of GEOSLOPE International Ltd.</li>
                        <li>a research assistant for Robotics and Sensor Network Group at the UofC</li>
                        <li>a member of the University of Calgary's Solar Car Software Team</li>
                        <li>a member of the Schulich Unmanned Aerial Vehicle's Software Team</li>
                    </ul>
                </Box>
                <Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" component="h1">
                        Proficient Languages
                    </Box>
                    <ul>
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>Python 3</li>
                        <li>React</li>
                        <li>JavaScript/HTML/CSS</li>
                        <li>SQL</li>
                    </ul>
                </Box>
                <Box>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" component="h1">
                        Hobbies
                    </Box>
                    <ul>
                        <li>Programming</li>
                        <li>Gaming</li>
                        <li>Sports</li>
                        <li>Weight lifting</li>
                        <li>Hiking</li>
                    </ul>
                </Box>
                <Box component="p">
                    For more information about me, check out the <NavLink to='/resume'>Resume</NavLink> page.
                </Box>
            </Card>
        </>
    )
}
