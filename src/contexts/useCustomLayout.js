import React, { useState } from "react";

export const LayoutContext = React.createContext(true);


const CustomLayout = ( {children} ) => {

  const [filterBar, setFilterBar] = useState( true );

  return (
    <LayoutContext.Provider value={{
      filterBar,
      setFilterBar
    }} >

      {children}

    </LayoutContext.Provider>
  );
};

export default CustomLayout;
