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

  // generate the players lvl 90 jobs and add them to an array
  // console.log(player)
  // let leveledJobs = [];
  // function findJobs(player) {
  //   for(let i = 0; i < player?.Character?.ClassJobs?.length; i++) {
  //     if (player?.Character?.ClassJobs[i]?.Level === 90) {
  //       leveledJobs.push(player?.Character?.ClassJobs[i]?.UnlockedState?.Name)
  //     } 
  //   };
  //   return leveledJobs;
  // }
  // let characterJobs = findJobs(player);


  //remove level 90 crafters and gatherers
    // function checkJob(job) {
    //   if( job === 'Sage' || job === 'Samurai') {
    //       return false
    //   } else {
    //     return true
    //   }
    // }
    // let filteredJobs = characterJobs.filter(checkJob)

  // let filteredRaidTeam = myRaidTeam.filter(player => {
  //   // only players with level 90 or above join raid team
  //     if (player?.Character?.ClassJobs[i]?.Level === 90) {
  //       return true
  //     } else {
  //       return false
  //     }
  // }});

    function clearAll() {
      setTanks([]);
      setHealers([]);
      setDps([]);
    }

  let roster = myRaidTeam.map((player, index) => {
    return (
      <>
        <p key={index}>Name: {player?.name?.Character?.Name} </p>
        <p> Jobs: {player?.Character?.ClassJobs} </p>
        <img className="tank_icon" src={tank_icon} alt="job icon" onClick={() => handleSetTanks(player)}/>
        <img className="healer_icon" src={healer_icon} alt="job icon" onClick={() => handleSetHealers(player)}/>
        <img className="dps_icon" src={dps_icon} alt="job icon" onClick={() => handleSetDps(player)}/>
        <button className="remove_button" onClick={() => remove(player)}>Assigned</button> <button className="remove_button" onClick={() => remove(player)}>Remove Player</button>
      </>
    )
  });
  
  let thoseWhoTank = tanks.map((player, index) => {
    return (
      <p key={index}>{player?.name?.Character?.Name}</p>
    )
  });

  let thoseWhoHeal = healers.map((player, index) => {
    return (
      <p key={index}>{player?.name?.Character?.Name}</p>
    )
  });
  let thoseWhoDPS = dps.map((player, index) => {
    return (
      <p key={index}>{player?.name?.Character?.Name}</p>
    )
  });

  return (
    <>
      <h2>Roster</h2>
      {roster}
      <h2>Tanks</h2>
      {thoseWhoTank}
      <h2>Healers</h2>
      {thoseWhoHeal}
      <h2>DPS</h2>
      {thoseWhoDPS}
      <button className="wipe_team" onClick={() => clearAll()}>Remove all assignments.</button>
    </>
  );
};

export default Roster;