import './css/App.css';
import './css/utils.css';
import Count from "./Count";
import React, {useState} from 'react';
import modes from './modes';


function App() {

  const [appMode, setAppMode] = useState(modes.light);


  return (
    <div className={`App ${appMode}`}>
      <Count changeAppMode={setAppMode} />
    </div>
  )
}

export default App;
