import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import theme from "../theme/theme"

type CustomThemeProviderProps = {
    children?: JSX.Element;
}

const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider