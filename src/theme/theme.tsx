import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        fonts: string[];
        colors: {
            black: string;
            white: string;
            grey: string;
            
        },
        fontSizes: {
            small: string;
            medium: string;
        },
    }
}

const customTheme: DefaultTheme = {
    fonts: ['Montserrat', 'sans-serif'],
    colors: {
        black: "#000",
        white: "#FFF",
        grey: "#707070",
    },
    fontSizes: {
        small: '1.4rem',
        medium: '1.6rem',
    },
};

export default customTheme;