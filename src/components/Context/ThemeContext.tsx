import { createContext } from "react";
import { Theme } from "./Theme";



type themeContextProps={
    children: React.ReactNode
}
export const themeContext=createContext(Theme)

const ThemeContext = ({children}:themeContextProps) => {
    return (
        <themeContext.Provider value={Theme}>
            {children}
        </themeContext.Provider>
    );
};

export default ThemeContext;