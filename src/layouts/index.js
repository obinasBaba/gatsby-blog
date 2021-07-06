import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "../../src/theme";
import "../styles/index.css";
import { GlobalStyle, Main } from "../styles/globalStyle";
import Page from "./components/Page";
import Header from "../components/Header2";
import Footer from "../components/Footer";
import AppStateProvider from "../contexts/AppStateContext";
import DrawerLayout from "./components/DrawerLayout";

export default function TopLayout({
                                    path, children, location,
                                    data, navigate, pageContext, pageResources
                                  }) {

  // console.log('TOP_LAYOUT :: ---', );
  // console.log('Path ---', path, ', data: ', data, 'page Resources : ', pageResources,
  //   ', pageContext: ', pageContext );
  //
  // console.log(  location.pathname === '/tags/' );

  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      </Helmet>

      <AppStateProvider>

        <StyledThemeProvider theme={ theme }>
          <ThemeProvider theme={ theme }>
            <GlobalStyle />
            <CssBaseline />

            <Page>
              <Header />

              <Main>
                {
                  (() => {
                    if ((pageContext.layout === "drawer") || (location.pathname === "/tags/"))
                      return <DrawerLayout children={ children } />;

                    return children;
                  })()
                }
              </Main>

              <Footer />
            </Page>

          </ThemeProvider>
        </StyledThemeProvider>

      </AppStateProvider>

    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node
};
