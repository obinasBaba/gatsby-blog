export const parentVariant = {
  initial: {},
  animate :{},
  hover :{}
}

export const txtVariant = {
  initial: {
    x: 0,
  },

  hover: {
    x: '-1.7em',
  }
}

export const bgVariant = {
  initial: {
    width: '100%',
    height: '100%'
  },

  hover: {
    width: '2.1rem',
    height: '2.1rem'
  },
}

export const arrowVariant = {
  initial: {
    opacity: 0,
    rotate: '-90deg',
    x: -30,
    scale: 1,
  },

  hover: {
    x: 0,
    scale: .9,

    opacity: 1,
    transition :{
      opacity: {
        duration: .3,
        // delay: .02,
        ease: [.17, .17, .16, 1]
      },

      default: {
        duration: .33,
        ease: [.17, .17, .16, 1]
      }
    }
  },


}

export const transition = {
  duration: .33,
  ease: [.17, .17, .16, 1]
}

export const arrowTransition = {
  opacity: {
    duration: .15,
    delay: 0,
    ease: [.17, .17, .16, 1]
  },

  default: {
    duration: .33,
    ease: [.17, .17, .16, 1]
  }
}