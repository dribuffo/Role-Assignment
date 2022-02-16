//dependencies
import './Roster.css'
//components

//images
import tank_icon from '../images/FFXIVIcons/00_ROLE/TankRole.png'
import healer_icon from '../images/FFXIVIcons/00_ROLE/HealerRole.png'
import dps_icon from '../images/FFXIVIcons/00_ROLE/DPSRole.png'

const Roster = ({myRaidTeam, handleSetTanks, tanks, handleSetHealers, healers, handleSetDps, dps, clearAll, remove}) => {

   //find level 90 jobs
  function findJobs(player){
    let leveledJobs = [];
    for(let i = 0; i < arr_len; i++) {
      if (player.name.Character.ClassJobs[i].Level === 90) {
        leveledJobs.push(player.name.Character.ClassJobs[i].UnlockedState.Name)
      }
    }
    return leveledJobs
  }

  //filter leveledJobs by tank 
  function checkTank(job) {
    if( job === 'Paladin' || job === 'Gunbreaker' || job === 'Warrior' || job === 'Dark Knight') {
      console.log ('found a tank job!')  
      return true
    } else {
      return false
    }
  }

  //filter leveledJobs by Healer
  function checkHealer(job) {
    if( job === 'White Mage' || job === 'Scholar' || job === 'Astrologian' || job === 'Sage') {
      console.log ('found a healer job!')  
      return true
    } else {
      return false
    }
  }

  //filter leveledJobs by Healer
  function checkHealer(job) {
    if( job === 'White Mage' || job === 'Scholar' || job === 'Astrologian' || job === 'Sage') {
      console.log ('found a healer job!')  
      return true
    } else {
      return false
    }
  }


  let availableTanks = leveledJobs.filter(checkTank)

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
      <>
      <p key={index}>{player?.name?.Character?.Name}</p>
      {/* <p>{findTanks(player)}</p> */}
      </>
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