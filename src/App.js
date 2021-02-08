import {useState, useEffect} from 'react'
import axios from 'axios'
const dotenv = require('dotenv');

function App() {

  const env = dotenv.config().parsed;
  const [characters, updateseries] = useState([])

  const timestamp = '1612809355974';
  const apikeypublic = process.env.REACT_APP_APIKEYPUBLIC;
  const privatekey = process.env.REACT_APP_PRIVATEKEY;
  const md5 = process.env.REACT_APP_MD5;

  useEffect(()=> {
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apikeypublic}&hash=${md5}&limit=9`)
    .then(resp =>{ 
      updateseries(resp.data)
      console.log(characters)
    })
  })
  return (
    <div className="App App-header">
      
    </div>
  );
}

export default App;
