//dependencies
import './Roster.css'
import { useState } from 'react'
//components

//images
import tank_icon from '../images/FFXIVIcons/00_ROLE/TankRole.png'
import healer_icon from '../images/FFXIVIcons/00_ROLE/HealerRole.png'
import dps_icon from '../images/FFXIVIcons/00_ROLE/DPSRole.png'

const Roster = ({myRaidTeam, remove}) => {
  const [tanks, setTanks] = useState([])
  const [healers, setHealers] = useState([])
  const [dps, setDps] = useState([])

  const handleSetTanks = (player) => {
    if (myRaidTeam.length < 2) {
      setTanks(player);
    } else {
      alert("Too many tanks")
    }
  };

  const handleSetHealers = (player) => {
    if (myRaidTeam.length < 2) {
      setHealers(player);
    } else {
      alert("Too many healers")
    }
  };

  const handleSetDps = (player) => {
    if (myRaidTeam.length < 4) {
      setDps(player);
    } else {
      alert("Too many dps")
    }
  };

  // generate the players lvl 90 jobs and add them to an array
  console.log(player)
  let leveledJobs = [];
  function findJobs(player) {
    for(let i = 0; i < player?.Character?.ClassJobs?.length; i++) {
      if (player?.Character?.ClassJobs[i]?.Level === 90) {
        leveledJobs.push(player?.Character?.ClassJobs[i]?.UnlockedState?.Name)
      } 
    };
    return leveledJobs;
  }
  let characterJobs = findJobs(player);


  //remove level 90 crafters and gatherers
    function checkJob(job) {
      if( job === 'Sage' || job === 'Samurai') {
          return false
      } else {
        return true
      }
    }
    let filteredJobs = characterJobs.filter(checkJob)


  let roster = myRaidTeam.map((player, index) => {
    return (
      <>
        <p>Name: {player?.name?.Character?.Name} </p>
        <p>{filteredJobs}</p>
        <img className="tank_icon" src={tank_icon} alt="job icon" onClick={() => handleSetTanks(player)}/>
        <img className="healer_icon" src={healer_icon} alt="job icon" onClick={() => handleSetHealers(player)}/>
        <img className="dps_icon" src={dps_icon} alt="job icon" onClick={() => handleSetDps(player)}/>
        <button className="remove_button" onClick={() => remove(player)}>Drop Player</button>
      </>
    )
  });

  return (
    <>
      <h2>Roster</h2>
      {roster}
      <h2>Tanks</h2>
      {tanks}
      <h2>Healers</h2>
      {healers}
      <h2>DPS</h2>
      {dps}
    </>
  );
};

export default Roster;