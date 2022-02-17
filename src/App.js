//depenedencies
import React, { useState } from 'react';
import { Routes, Link, Route} from 'react-router-dom';
import './App.css';



//components
import Guild from './Guild/Guild';
import Roster from './Roster/Roster';
import Home from './Home/Home';


function App() {
  const [myRaidTeam, setMyRaidTeam] = useState([]);
  const [tanks, setTanks] = useState([])
  const [healers, setHealers] = useState([])
  const [dps, setDps] = useState([])  
  const [person, setPerson] = useState({})

  const handleSetPerson = (player) => {
    setPerson(player)
  }

  const handleMyRaidTeam = (name) => {
    if (myRaidTeam.length < 8) {
      const addToTeam = [...myRaidTeam]
      addToTeam.push({name})
      setMyRaidTeam(addToTeam);
    } else {
      alert("Too many players")
    }
  };

  const handleSetTanks = (player) => {
    if (tanks.length < 2) {
      const tanksCopy = [...tanks]
      tanksCopy.push(player)
      setTanks(tanksCopy);
    } else {
      alert("Too many tanks")
    }
  };

  const handleSetHealers = (player) => {
    if (healers.length < 2) {
      const healersCopy = [...healers]
      healersCopy.push(player)
      setHealers(healersCopy);
    } else {
      alert("Too many healers")
    }
  };

  const handleSetDps = (player) => {
    if (dps.length < 4) {
      const dpsCopy = [...dps]
      dpsCopy.push(player)
      setDps(dpsCopy);
    } else {
      alert("Too many dps")
    }
  };

  function clearAll() {
    setTanks([]);
    setHealers([]);
    setDps([]);
  }

  const remove = (object) => {
    const teamCopy = [...myRaidTeam]
    const filteredTeam = teamCopy.filter((name) => name !== object)
    setMyRaidTeam(filteredTeam)
  }

  return (
    <div className="App">
      <nav>
        <Link to='/Guild/:id'> <h2>Members</h2> </Link>
        <Link to='/Roster'> <h2>Roster</h2> </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />,
          <Route path='/Guild/:id' element={<Guild handleMyRaidTeam={handleMyRaidTeam} handleSetPerson={handleSetPerson}/>} />,
          <Route path='/Roster' element={<Roster myRaidTeam={myRaidTeam} person={person} handleSetTanks={handleSetTanks} tanks={tanks} handleSetHealers={handleSetHealers} healers={healers} handleSetDps={handleSetDps} dps={dps} clearAll={clearAll} remove={remove}/>} />,
        </Routes>
      </main>

    </div>
  );
}

export default App;
