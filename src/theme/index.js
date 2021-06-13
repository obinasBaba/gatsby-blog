import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

let theme = createMuiTheme({

  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: 'calc(1vw + 0.6em)',
        },

        [breakpoints.down('sm')]: {
          html: {
            fontSize: 'calc(1vw + .85em)',
          },
        },

        [breakpoints.up('xl')]: {
          ':root': {
            fontSize: '1.325em !important',
          },

          body: {
            background: 'lightblue'
          }
        },


      }
    },

    MuiContainer: {
      root: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }
    },
  },

  typography: {

    fontFamily: [
      "Sofia Pro Soft, sans-serif",
    ].join(','),

    body1: {
      // letterSpacing: '2px'
    },

    h1: {
      // fontFamily: 'Gramatika, sans-serif',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: "900",
      fontSize: '3.3rem'
    }
  }
})

export default responsiveFontSizes(theme)



