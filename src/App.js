import './App.css';
import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Resume from './Resume';
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import ContactInfo from './ContactInfo';

export default function App() {
  return (
    <Router>
      <NavBar />

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Grid>
    </Router>
  );
}
