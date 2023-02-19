import React, { useState } from 'react';
import Main from './Main';
import Alert from './alert/Alert';

export const AlertContext = React.createContext();

// Parrent
const UseContext = () => {
  const [alert, setAlert] = useState(false);

  const toggleAlert= () => setAlert( prev => setAlert(prev => !prev) )

  return (
    <AlertContext.Provider value={alert}>
      <div className="container" >
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlertContext.Provider>
  ); 
};

export default UseContext;
