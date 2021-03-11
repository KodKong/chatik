import React from 'react'; 
import Form from './components/Form'; 
import socket from "./socket"; 

function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState); 

  return (
    <div className="wrapper">
      <Form/> 
    </div>
  );
}

export default App;
