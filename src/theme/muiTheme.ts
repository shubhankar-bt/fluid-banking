import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    success: Palette['primary'];
    warning: Palette['primary'];
    sidebar: {
      main: string;
      contrastText: string;
      border: string;
      hover: string;
    };
  }

  interface PaletteOptions {
    success?: PaletteOptions['primary'];
    warning?: PaletteOptions['primary'];
    sidebar?: {
      main: string;
      contrastText: string;
      border: string;
      hover: string;
    };
  }
}

const baseTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(217, 91%, 60%)', // Professional Banking Blue
      light: 'hsl(217, 91%, 95%)',
      dark: 'hsl(217, 91%, 50%)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'hsl(220, 13%, 95%)',
      light: 'hsl(220, 13%, 97.5%)',
      dark: 'hsl(220, 13%, 90%)',
      contrastText: 'hsl(220, 13%, 18%)',
    },
    success: {
      main: 'hsl(142, 71%, 45%)', // Banking Green
      light: 'hsl(142, 71%, 95%)',
      dark: 'hsl(142, 71%, 40%)',
      contrastText: '#ffffff',
    },
    warning: {
      main: 'hsl(38, 92%, 50%)', // Professional Orange
      light: 'hsl(38, 92%, 95%)',
      dark: 'hsl(38, 92%, 45%)',
      contrastText: '#ffffff',
    },
    error: {
      main: 'hsl(0, 84%, 60%)',
      light: 'hsl(0, 84%, 95%)',
      dark: 'hsl(0, 84%, 55%)',
      contrastText: '#ffffff',
    },
    background: {
      default: 'hsl(0, 0%, 100%)',
      paper: 'hsl(0, 0%, 100%)',
    },
    text: {
      primary: 'hsl(220, 13%, 18%)',
      secondary: 'hsl(220, 13%, 46%)',
    },
    divider: 'hsl(220, 13%, 91%)',
    sidebar: {
      main: 'hsl(220, 13%, 99%)',
      contrastText: 'hsl(220, 13%, 18%)',
      border: 'hsl(220, 13%, 91%)',
      hover: 'hsl(217, 91%, 95%)',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 10px -1px rgba(0, 0, 0, 0.1)',
    '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
    '0 8px 25px -3px rgba(0, 0, 0, 0.15)',
    '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
    ...Array(20).fill('0 10px 30px -10px rgba(0, 0, 0, 0.3)'),
  ] as any,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px -1px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 25px -3px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid hsl(220, 13%, 91%)',
          backgroundColor: 'hsl(220, 13%, 99%)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: '2px 8px',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'hsl(217, 91%, 95%)',
            color: 'hsl(217, 91%, 60%)',
          },
          '&.Mui-selected': {
            backgroundColor: 'hsl(217, 91%, 60%)',
            color: '#ffffff',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'hsl(217, 91%, 55%)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '0.75rem',
          height: 24,
        },
      },
    },
  },
};

export const muiTheme = createTheme(baseTheme);