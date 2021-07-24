import React from 'react'
import Card from '@material-ui/core/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import Box from '@material-ui/core/Box';

export default function ContactInfo() {
    return (
        <>
            <h2>Contact Info</h2>
            <Card style={{maxWidth: "600px", padding: 10}}>
                If you would like to contact me, 
                please send an email to vythomas97@gmail.com or clicking the email link below.
                If you would like to learn more about me, my GitHub and my LinkedIn is down below.
            </Card>
            <Card style={{ margin: "5px"}}>
                <IconButton aria-label="Email" onClick={() => window.open('mailto:vythomas97@gmail.com')}>
                    <EmailIcon fontSize="large"/>
                </IconButton>
                <IconButton aria-label="GitHub" onClick={() => window.open('https://github.com/ThomasVy')}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
                <IconButton aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/thomas-vy/')}>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>
            </Card>
        </>
    )
}
