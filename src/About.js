import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import JapanImage from './images/resizedJapan.jpg';
import ProfessionPic from './images/resize.jpg';
export default function About() {
    return (
        <>
            <h2>About Me</h2>
            <Card>
                <Grid container spacing={1}>
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
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thomas Vy (Me)
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <Box textAlign="justify" m={2}>
                    <h3>Who Am I?</h3>
                    <p>
                        I am a Chinese male born and raised in Calgary, AB, Canada. I love programming and learning 
                        about the unknown.
                        I graduated from the <a href="https://www.ucalgary.ca/">University of Calgary</a> in May 2021.
                        At the university, I graduated from the software engineering program with Distinctions (3.89 GPA) 
                        and completed the Engineering Internship program at GEOSLOPE International Ltd.
                        Before university, I graduated from John G. Diefenbaker high school and Sir John A. MacDonald junior high.
                    </p>
                </Box>
                <Box textAlign="justify" m={2}>
                    <h3>Why did I choose the path of Software Engineering?</h3>
                    <p>
                        Coming out of highschool, 
                        I didn't know what I wanted to do with my future. In highschool,
                        my favorite and strongest subjects were Physics, Biology, Chemistry, and Math. 
                        I had the grades to enter Engineering right away, but I didn't want to do the same thing as everyone else.
                        That's when my sister recommended me to pursue a degree in Geology instead of Engineering at the University of Calgary.
                        I remembered when I was in elementary, I found the Geology topics be the most interesting, 
                        therefore I decided to follow my sister's advice and enter the University of Calgary for Geology.
                    </p>
                    
                    <p>
                        After I completed my first year of university in Geology, I quickly found out I didn't have a passion for Geology as I did in elementary school.
                        The labs were not as interesting as I thought, and I couldn't grasp the concepts very well. I didn't do poorly in the classes 
                        but I certainly didn't retain much from those classes.
                        I was conflicted on what to do; do I follow the difficult path of Engineering or do I stay in the degree that I didn't find appealing.
                        After talking to some friends on what to do, they convinced me to try out Electrical Engineering instead.
                        What really convinced me to transfer to Electrical Engineering was that a super close friend of mine was also switching into Engineering
                        and he had the knowledge for switching from a science major to an engineering major. 
                         
                        I knew that the average to get into Engineering was high (near a 3.60 GPA) and
                        there was a chance I would be wasting my time trying to switch, but I had to try.
                        For the remainder of the semester and the next semester, I studied hard.
                        After all the hard work, I was successfully able to enter Electrical Engineering.
                        I was scared. I've heard the horror stories about individuals failing Engineering and
                        forced to drop out of university, and I was now a full year behind all my highschool friends
                        that entered university at the same time as me. Luckily, I still had that one friend that 
                        helped me transfer into Engineering. Sadly, we had to split because we choose different specializations
                        at the end (I chose software and he chose mech).
                    </p>

                    <p>
                       In the first year of Engineering, regardless of which specialization (Mech, Software, Electrical, etc.)
                       you are initially in, everyone has to complete the same first year courses, and at the end of first year,
                       everyone re-selects their specialization (the ones with the highest GPA have first choices prioritized). 
                       I was thinking that my choice would remain Electrical Engineering, however, in my first semester of Engineering,
                       I had a programming class called <a href='http://contacts.ucalgary.ca/info/enel/courses/f18/ENGG233'>ENGG 233 </a>
                    where we learned Processing (a language mixed between Java/Arduino). That class taught me the fundamentals of programming
                       and taught me how fun programming was. I had no prior experience with programming before that class, 
                       but after taking that course I immediately fell in love with programming. 
                       Programming in that class gave me a sense of euphoria whenever my code worked (Always made me want to dance).
                       I created this billiard game as a final project in that class (you can find it on my <a href="https://github.com/ThomasVy">GitHub</a>), 
                       and when I got something to finally work after many failed attempts, it was one of the best feelings that I ever had. When I handed in the game for the class, 
                       I was extremely happy that I could product a game like that out of scratch, but I was also sad that the coding class was over.
                       That's when I started asking myself, if I still wanted to be register for Electrical Engineering.
                       I waited for next semester to begin before making that decision, we had an actual electrical engineering class the next semester. 
                       In that class, I never had the same excitement as making something work with code (in fact, I was actually underwhelmed when things started to work).
                       I was lost on what to do. This is when I consulted my good friend that helped me transfer in to Engineering. 
                       After explaining my situation, he told me go for the path that made me feel the most achieved, Software Engineering.
                       That was when I decided I wanted to do Software Engineering. That was in fall 2016 when Software Engineering was 
                       the most undesired Engineering specialization, and now it is the most sought-after Engineering specialization.
                       Sometimes, I do wish that I would've taken a more direct route programming, taken a degree in Computer Science instead of Software Engineering. That
                       It would've allowed me to take some really interesting classes.
                       However, at the end the of the day, I am doing what I love and I do not regret a thing. 
                    </p>
                </Box>
                <Box textAlign="justify" m={2}>
                    <h3>Classes I enjoyed in University</h3>
                    <ol>
                        <li>CPSC 453 - Introduction to Computer Graphics</li>
                        <li>CPSC 457 - Operating Systems</li>
                        <li>CPSC 525 - Principles of Computer Security</li>
                        <li>CPSC 441 - Computer Networks</li>
                        <li>ENSF 409 - Principles of Software Development</li>
                        <li>ENSF 337 - Programming Fundamentals for Software and Computer</li>
                        <li>ENGG 233 - Computing For Engineers</li>
                    </ol>
                </Box>
                <Box textAlign="justify" m={2}>
                    <h3>Hobbies</h3>
                    <ul>
                        <li>Programming (Of course since I am a Software Engineer)</li>
                        <li>Gaming (video games or board games)</li>
                        <li>Sports (Badminton is my go to)</li>
                        <li>Weight lifting (I used to go to the gym all the time in Uni and highschool)</li>
                        <li>Hiking</li>
                        <li>Anything really. I just like having a good time with others</li>
                    </ul>
                </Box>
            </Card>
        </>
    )
}
