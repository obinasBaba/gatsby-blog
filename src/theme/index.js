import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";


let theme = createMuiTheme({

    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1900
      },
    },

  overrides: {
    MuiCssBaseline: {
      /*'@global': {
        html: {
          fontSize: 'calc(1vw + 0.6em)',
        },

        [breakpoints.down('sm')]: {
          html: {
            fontSize: 'calc(1vw + .85em)',
          },
        },

        [breakpoints.up('xl')]: {
          html: {
            fontSize: '21.325em !important',
          },

        },
      }*/
    },

    MuiContainer: {
      root: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }
    },

  },

  palette: {
      primary: {
        main: '#EEE8AAFF'
      },
      secondary: {
        main: '#EEE8AAFF'
      },

  },

  typography: {

    fontFamily: [
      "Sofia Pro, sans-serif",
    ].join(','),

    body1: {
      fontSize: '1.2rem',
      fontWeight: 300,
      letterSpacing: .5,
      // lineHeight: '170%',
      lineHeight: 1.5
    },

    h1: {
      // fontFamily: 'Gramatika, sans-serif',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: "900",
      // fontSize: '3.3rem'
    }
  }
})

export default responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg', 'xl'],
})



