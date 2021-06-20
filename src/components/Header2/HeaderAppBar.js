import React, { useEffect, useState } from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import styled, { css } from 'styled-components'
import NavBtn from './components/NavBtn'
import { mediumUp, spacing } from '../../styles/mixins'
import { AnimatePresence } from 'framer-motion'
import Menu from './components/Menu'
import AvatarWithSocial from "./components/AvatarWithSocial";
import { useMediaQuery, useTheme } from "@material-ui/core";
import NavLinks from "./components/NavLinks";
import ToggleSvg from "./components/ToggleSvg";

const transition = css`
  transition: all 0.3s;
`

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    threshold: 50,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem 2rem 1.3rem;
  ${spacing('ph', 3.2)};
  ${spacing('pv', 3)};

  ${transition};
  z-index: 100;


  &::after {
    content: '';
    display: ${({ isGradient }) => (isGradient ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;

    ${transition};
    backdrop-filter: saturate(180%) blur(11px);
    background: ${({ isWhite }) =>
      isWhite
        ? 'linear-gradient(180deg, var(--clr-nav) 0%, rgba(243, 243, 243, 0) 98%)'
        : 'linear-gradient(0deg, rgba(2, 2, 30, 0.0001) 0%, #02021e 98%)'};
  }

  ${mediumUp(css`
    ${spacing('pv', 1.5)};
    ${spacing('ph', 9)};
  `)};
`

const ToolBarWrapper = styled.nav`
  position: relative;
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 101;
  //border: thin solid red;
`

function HeaderAppBar({ isGradient = true, isWhite = true }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const theme = useTheme();
  const media = useMediaQuery( theme.breakpoints.up( "sm" ) );


  useEffect(() => {
    if (menuIsOpen) document.body.classList.add('locked');

    return () => document.body.classList.remove('locked');
  }, [menuIsOpen]);

  return (
    <>
      <AnimatePresence>
        {menuIsOpen && (
          <Menu
            key={menuIsOpen.toString()}
            toggleMenu={{ setMenuIsOpen, menuIsOpen }}
          />
        )}


      </AnimatePresence>

      <HideOnScroll>
        <NavContainer isGradient={isGradient} isWhite={isWhite}>
          <ToolBarWrapper>

            <AvatarWithSocial isWhite={isWhite} />


            <ToggleSvg />


            <AnimatePresence>
              { media ? <NavLinks /> :

                <NavBtn
                  isWhite={ isWhite }
                  key={ !menuIsOpen.toString() + "nav" }
                  toggleMenu={ { setMenuIsOpen, menuIsOpen } }
                />
              }
            </AnimatePresence>



          </ToolBarWrapper>
        </NavContainer>
      </HideOnScroll>
    </>
  )
}

export default HeaderAppBar
