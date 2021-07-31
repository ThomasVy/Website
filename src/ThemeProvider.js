import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
const useStyles = makeStyles((theme) => ({
    title: {
      backgroundColor: 'inherit',
      color: "white"
    },
    mainCard: {
      maxWidth: "900px",
      padding: 15,
      margin: 10,
      width: "80vw"
    },
}));

export default function ThemeProvider({children}) {
    const classes = useStyles();
    return (
        <ThemeContext.Provider value={classes}>
            {children}
        </ThemeContext.Provider>
    )
}
