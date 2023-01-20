import './App.css';
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme} from "./themes.js";
import DarkModeToggle from "react-dark-mode-toggle";



function App() {


  const [theme, setTheme] = useState(() => false);

  const styledApp = styled.div``

  const themeToggler = () => {
    theme === false ? setTheme(true) : setTheme(false)

  }

  return (
    <ThemeProvider theme={theme === false ? lightTheme : darkTheme} >
      <styledApp>
        <div className="app">

          <div className="togg" >
            <DarkModeToggle
              onChange={() => themeToggler()}
              checked={theme}
              size={80}
            />
          </div>

        </div>




      </styledApp >

    </ThemeProvider >

  );
}

export default App;




