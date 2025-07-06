import { PaletteMode } from '@mui/material';
import { Shadows, Theme, Components } from '@mui/material/styles';
declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        highlighted: true;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface ColorRange {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    }
    interface PaletteColor extends ColorRange {
    }
}
export declare const brand: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const green: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const orange: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const red: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const getDesignTokens: (mode: PaletteMode) => {
    palette: {
        mode: PaletteMode;
        primary: {
            contrastText: string;
            light: string;
            main: string;
            dark: string;
        };
        info: {
            contrastText: string;
            light: string;
            main: string;
            dark: string;
        };
        warning: {
            light: string;
            main: string;
            dark: string;
        };
        error: {
            light: string;
            main: string;
            dark: string;
        };
        success: {
            light: string;
            main: string;
            dark: string;
        };
        grey: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        divider: string;
        background: {
            default: string;
            paper: string;
        };
        text: {
            primary: string;
            secondary: string;
            warning: string;
        };
        action: {
            hover: string;
            selected: string;
        };
    };
    typography: {
        h1: {
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
            letterSpacing: number;
        };
        h2: {
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
        };
        h3: {
            fontSize: string;
            lineHeight: number;
        };
        h4: {
            fontSize: string;
            fontWeight: number;
            lineHeight: number;
        };
        h5: {
            fontSize: string;
            fontWeight: number;
        };
        h6: {
            fontSize: string;
            fontWeight: number;
        };
        subtitle1: {
            fontSize: string;
        };
        subtitle2: {
            fontSize: string;
            fontWeight: number;
        };
        body1: {
            fontSize: string;
        };
        body2: {
            fontSize: string;
            fontWeight: number;
        };
        caption: {
            fontSize: string;
            fontWeight: number;
        };
    };
    shape: {
        borderRadius: number;
    };
    shadows: Shadows;
};
export declare const inputsCustomizations: Components<Theme>;
