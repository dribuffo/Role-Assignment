//depenedencies
import React, { useEffect, useState } from 'react';
import { Routes, Link, Route} from 'react-router-dom';
import './App.css';
import guildCrest from './images/crest.png'


//components
import Guild from './Guild/Guild';
import Roster from './Roster/Roster';
import Home from './Home/Home'



//links
let guildLink = "https://na.finalfantasyxiv.com/lodestone/freecompany/9236179148295113228/"


//Api Info
// // let url = "https://xivapi.com/freecompany/search?name=Lex+Talionis&sever=Balmung";
// let guildUrl = "https://xivapi.com/freecompany/9236179148295113228?data=FCM"
// let playerUrl = "https://xivapi.com/character/" //+character ID

function App() {
  const [myRaidTeam, setMyRaidTeam] = useState([])

  const handleMyRaidTeam = (name) => {
    if (myRaidTeam.length < 8) {
      const addToTeam = [...myRaidTeam]
      addToTeam.push({name})
      setMyRaidTeam(addToTeam);
    } else {
      alert("Too many players");
    }
  };

  const remove = {object} => {
    const teamCopy = [...myRaidTeam]
    const filteredTeam = teamCopy.filter((name) => name !== object)
    setMyRaidTeam(filteredTeam)
  }

  // useEffect(() => { 
  //   fetch(guildUrl, {mode: 'cors'})
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(() => console.log("oops, it failed"))
  // }, []);


  return (
    <div className="App">
      <nav>
        <Link to='/Guild'> <h2>Members</h2> </Link>
        <Link to='/Roster'> <h2>Roster</h2> </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />,
          <Route path='/Guild' element={<Guild />} />,
          <Route path='/Roster' element={<Roster />} />,
        </Routes>
      </main>
      <footer>
        <img className="i-foot" src={guildCrest} alt="guild crest" />
        <p>Created by Zebix Rune of Balmung</p>
        <img className="i-foot" src="https://p7.hiclipart.com/preview/733/367/623/final-fantasy-xiv-stormblood-final-fantasy-xv-final-fantasy-xiv-heavensward-world-of-warcraft-final-fantasy-thumbnail.jpg" alt="meteor symbol" />
      </footer>
    </div>
  );
}

export default App;
