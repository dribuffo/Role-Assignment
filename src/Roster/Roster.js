//dependencies
import './Roster.css'
//components

//images
import tank_icon from '../images/FFXIVIcons/00_ROLE/TankRole.png'
import healer_icon from '../images/FFXIVIcons/00_ROLE/HealerRole.png'
import dps_icon from '../images/FFXIVIcons/00_ROLE/DPSRole.png'

const Roster = ({myRaidTeam, person, handleSetTanks, tanks, handleSetHealers, healers, handleSetDps, dps, clearAll, remove}) => {
  //find level 90 jobs for the filter and display functions
  function displayJobs(person){
    let arr_len = person.Character.ClassJobs.length
    let availableJobs = [];
    for(let i = 0; i < arr_len; i++) {
      if (person.Character.ClassJobs[i].Level === 90) {
        availableJobs.push(person.Character.ClassJobs[i].UnlockedState.Name)
        availableJobs.push(" ")
      }
    }
    return availableJobs
  }

  //filter leveledJobs by tank 
  function checkTank(job) {
    if( job === 'Paladin' || job === 'Gunbreaker' || job === 'Warrior' || job === 'Dark Knight' || job === " ") {
      return true
    } else {
      return false
    }
  }

  //filter leveledJobs by Healer
  function checkHealer(job) {
    if( job === 'White Mage' || job === 'Scholar' || job === 'Astrologian' || job === 'Sage' || job === " ") {
      return true
    } else {
      return false
    }
  }

  //filter leveledJobs by DPS
  function checkDps(job) {
    if( job === 'Dragoon' || job === 'Reaper' || 
        job === 'Monk' || job === 'Samurai' || 
        job === 'Ninja' || job === 'Bard' || 
        job === 'Machinist' || job === 'Dancer' || 
        job === 'Black Mage' || job === 'Summoner' || 
        job === 'Red Mage' || job === 'Blue Mage' ||
        job === " ") { 
      return true
    } else {
      return false
    }
  }

  //function cluster for filtering jobs based on what is available, to be displayed below:
  let availableTanks = displayJobs(person).filter(checkTank)
  let availableHealers = displayJobs(person).filter(checkHealer)
  let availableDPS = displayJobs(person).filter(checkDps)

  //find level 90 jobs for the myRaidTeam.mapping function
  function findJobs(player){
  let arr_len = player.name.Character.ClassJobs.length
  let leveledJobs = [];
  for(let i = 0; i < arr_len; i++) {
    if (player.name.Character.ClassJobs[i].Level === 90) {
      leveledJobs.push(player.name.Character.ClassJobs[i].UnlockedState.Name + ", ")
    }
  }
  return leveledJobs
  }

  //myRaidTeam mapping function
  let roster = myRaidTeam.map((player, index) => {
    return (
      <>
        <p key={index}>Name: {player?.name?.Character?.Name} </p>
        <p> Jobs: {findJobs(player)} </p>
        <img className="tank_icon" src={tank_icon} alt="job icon" onClick={() => handleSetTanks(player)}/>
        <img className="healer_icon" src={healer_icon} alt="job icon" onClick={() => handleSetHealers(player)}/>
        <img className="dps_icon" src={dps_icon} alt="job icon" onClick={() => handleSetDps(player)}/>
        <button className="remove_button" onClick={() => remove(player)}>Assigned</button> <button className="remove_button" onClick={() => remove(player)}>Remove Player</button>
      </>
    )
  });
  
  let thoseWhoTank = tanks.map((player, index) => {
    return (
      <>
      <p className="tank_names" key={index}>{player?.name?.Character?.Name}</p>
      {/* <p>{availableTanks}</p> */}
      </>
    )
  });

  let thoseWhoHeal = healers.map((player, index) => {
    return (
      <>
        <p className="healer_names" key={index}>{player?.name?.Character?.Name}</p>
        {/* <p>{availableHealers}</p> */}
      </>
    )
  });
  let thoseWhoDPS = dps.map((player, index) => {
    return (
      <>
        <p className="dps_names" key={index}>{player?.name?.Character?.Name}:</p>
        {/* <p>{availableDPS}</p> */}
      </>
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