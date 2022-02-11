//depenedencies
import React, { useEffect, useState } from 'react';
import { Routes, Link, Route} from 'react-router-dom';
import './App.css';

//components



//Api Info
let apiKey = "2998f53d4df24147a5d58ee30cb39c29ef44f4984ccc4e4fbe2d8eef365521c7";
// let url = "https://xivapi.com/freecompany/search?name=Lex+Talionis&sever=Balmung";
let guildUrl = "https://xivapi.com/freecompany/9236179148295113228?data=FCM"
let playerUrl = "https://xivapi.com/character/" //+character ID

function App() {
  const [freeCompanyMembers, setFreeCompanyMembers] = useState([])

  useEffect(() => { 
    fetch(guildUrl, {mode: 'cors'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(() => console.log("oops, it failed"))
  }, []);

  // let roster = freeCompanyMembers.map((character, index) => {
  //     return (

  //     )
  // });

  return (
    <div className="App">

    </div>
  );
}

export default App;
