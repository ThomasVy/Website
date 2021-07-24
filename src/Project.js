import React, {useState} from 'react'
import PropTypes from 'prop-types'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      root: {
          margin: '10px'
      }
  }));

function Project({project}) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <IconButton 
                            aria-label="expand/hide" 
                            onClick={handleExpandClick}  
                            className={clsx(
                                classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                        >
                            <ExpandMoreOutlinedIcon/>
                        </IconButton>
                    }
                    title={project.title}
                    subheader={project.software}
                />
                <Collapse in={expanded} timeout="auto">
                    {project.video == null ? "" : <CardMedia component="video" src={require(`./videos/${project.video}`).default} style={{maxHeight: '600px'}} controls/>}
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {project.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="Go to GitHub" onClick={() => window.open(project.githubLink)}>
                            <GitHubIcon fontSize="large"/>
                        </IconButton>
                    </CardActions>
                </Collapse>
            </Card>
        </>
    )
}

const ProjectPropTypes = {
    project: PropTypes.object.isRequired
  };

Project.propTypes = ProjectPropTypes;

export default Project;