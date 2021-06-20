import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'
import {largeUp, smallUp, spacing} from '../../../../../styles/mixins'

export const MenuContainer = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  max-width: 1600px;
  margin: 0 auto;
  z-index: 110;
  display: flex;
  justify-content: flex-end;
`

export const MenuList = styled(motion.div)`
  position: relative;
  overflow: hidden;
  background-color: rgba(238, 232, 170, 0.6);
  border: thin solid var(--clr-accent);
  z-index: 130;
  flex-basis: 70%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  //clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
    // ${ spacing( 'pl', 25 ) };

  ${ smallUp( css`
    flex-basis: 70%;
      // ${ spacing( 'pl', 5 ) };

  ` ) };

  ${ largeUp( css`
    flex-basis: 63%;
    ${ spacing( 'pl', 10 ) };

  ` ) }
  & .menu-txt {
    color: var(--clr-title);
    font-weight: 400;
    cursor: pointer;
  }

  & a {
    text-decoration: none;
  }

`

export const Overlay = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 120;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
`