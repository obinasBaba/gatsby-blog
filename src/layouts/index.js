import React, { useState } from "react";
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
import DrawerLayout from "../scenes/ArticlesPage";
import Footer from "../components/Footer";

export default function TopLayout({
                                    path, children, location,
                                    data, navigate, pageContext, pageResources
                                  }) {

  const [filterBar, setFilterBar] = useState( false );

  const Ctx = React.createContext( true );

  console.log('TOP_LAYOUT :: ---', );
  console.log('Path ---', path, ', data: ', data, 'page Resources : ', pageResources,
    ', pageContext: ', pageContext );

  console.log();

  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      </Helmet>

      <StyledThemeProvider theme={ theme }>
        <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <CssBaseline />

          <Page>
            <Header />

            <Main>
              {
                (() => {
                  if (pageContext.layout === 'drawer')
                    return <DrawerLayout children={ children } />;

                  return children;
                })()
              }
            </Main>

            <Footer />
          </Page>

        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node
};
