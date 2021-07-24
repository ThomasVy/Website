import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
const useStyles = makeStyles((theme) => ({
    title: {
      margin: '15px',
      padding: '10px',
      backgroundColor: '#FFFAF6'
    }
}));

export default function ThemeProvider({children}) {
    const classes = useStyles();
    return (
        <ThemeContext.Provider value={classes}>
            {children}
        </ThemeContext.Provider>
    )
}
