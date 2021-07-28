import React from 'react'
import { 
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Resume from './Resume';
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import ContactInfo from './ContactInfo';
import Projects from './Projects';
import ThemeProvider from './ThemeProvider';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    minHeight: '100vh',
    padding: "90px 0 15px 0"
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <NavBar />
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.mainContent}
        >
          <ThemeProvider>
            <Switch>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <ContactInfo />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </ThemeProvider>
        </Grid>
    </Router>
  );
}
