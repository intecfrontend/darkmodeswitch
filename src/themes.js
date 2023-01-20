import {createGlobalStyle} from "styled-components";

export const lightTheme ={
    body:"white",
   
}

export const darkTheme ={

    body:"black",
    
}


export const GlobalStyles = createGlobalStyle`
    body{
        background-color:${(props) =>props.theme.body};
        color:${(props)=>props.theme.text};
    }
   
    
`
