import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [series, updateseries] = useState([])

  const maxCharacters = 1500;
  const timestamp = '1612809355974';
  const apikeypublic = '9b5e74ce98ec30bbc45ad821262a4232';
  const privatekey = '45cc216d4d7420f6d2ccc86d395f04f3dc58a03c';
  const md5 = '6e7a7242dbbe651f497592dc785f8510';

  const offset = Math.floor((Math.random() * maxCharacters) + 1);

  useEffect(()=> {
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apikeypublic}&hash=${md5}&limit=9`)
    .then(resp =>{ 
      updateseries(resp.data)
      console.log(series)
    })
  })
  return (
    <div className="App App-header">
      
    </div>
  );
}

export default App;
