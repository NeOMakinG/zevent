import React, {useEffect, useState} from 'react';
import './reset.css';
import './App.css';
import Informations from './components/Informations'
import List from './components/List'
import Logo from './logo.png';

function App() {
  const [datas, setData] = useState();

  useEffect(() => {
      (async () => {
        const response = await fetch('https://zevent.fr/api/data.json', {
          mode: 'no-cors',
        });

        const playersData = await response.json();

        setData(playersData);
      })()

      setInterval(() => {
        (async () => {
          const response = await fetch('https://zevent.fr/api/data.json', 
          {
            mode: 'no-cors',
          }
          );
          const playersData = await response.json();

          setData(playersData);
        })()
      }, 5000) 
  }, [])

  return (
    <div className="App">
      <img className="logo" alt="Logo" src={Logo} />

      {datas ?
        <React.Fragment>
          <Informations datas={datas} />
          <List datas={datas} />
        </React.Fragment>
      : <p>Loading</p>
      }
    </div>
  );
}

export default App;
