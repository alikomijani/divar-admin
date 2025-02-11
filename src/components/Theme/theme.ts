import { colors, createTheme } from '@mui/material';

const commonSizes = {
  small: {
    height: 44,
  },
  medium: {
    height: 48,
  },
  large: {
    height: 56,
  },
};

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazir',
  },
  palette: {
    background: {
      default: colors.grey[100],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          height: commonSizes.small.height,
        },
        sizeMedium: {
          height: commonSizes.medium.height,
        },
        sizeLarge: {
          height: commonSizes.large.height,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-sizeSmall': {
            lineHeight: '26px',
          },
          '& .MuiInputBase-root': {
            '& .MuiInputBase-inputSizeSmall': {
              height: commonSizes.small.height - 16 + 'px',
            },
            '& .MuiInputBase-inputSizeMedium': {
              height: commonSizes.medium.height - 16 + 'px',
            },
          },
        },
      },
    },
  },
});

export default theme;
