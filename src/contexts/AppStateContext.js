import React, { useState } from 'react'

export const AppStateContext = React.createContext(false)


const AppStateProvider = ( {children} ) => {

  const [moonLight, setMoonLight] = useState({
    showMoon: true,
    show: true,
    position: 'absolute',
  })

  const [isWhite, setIsWhite] = useState(false)
  const [isHeaderGradient, setHeaderGradient] = useState(true)
  const [isContactOpen, setContactModal] = useState(false)
  const [isDrawerOpen, setDrawerOpen] = useState(true)

  const [queryString, setQueryString] = useState( '' );


  return (
    <AppStateContext.Provider value={{

      moonLight,
      setMoonLight,
      setIsWhite,
      isWhite,
      isHeaderGradient,
      setHeaderGradient,
      isContactOpen,
      setContactModal,
      queryString, setQueryString,
      isDrawerOpen, setDrawerOpen


    }} >

      {children}

    </AppStateContext.Provider>
  )
}

export default AppStateProvider
