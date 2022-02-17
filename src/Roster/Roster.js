//dependencies
import './Roster.css'
//components
import Footer from '../Footer/Footer'

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
      <div className="roster_display" key={index}>
        <p className="display_name">Name: {player?.name?.Character?.Name} </p>
        <p className="display_jobs"> Jobs: {findJobs(player)} </p>
        <img className="tank_icon" src={tank_icon} alt="job icon" onClick={() => handleSetTanks(player)}/>
        <img className="healer_icon" src={healer_icon} alt="job icon" onClick={() => handleSetHealers(player)}/>
        <img className="dps_icon" src={dps_icon} alt="job icon" onClick={() => handleSetDps(player)}/>
        <button className="assign_button" onClick={() => remove(player)}>Assigned</button> <button className="remove_button" onClick={() => remove(player)}>Remove Player</button>
      </div>
    )
  });
  
  // state management for people who are tanks
  let thoseWhoTank = tanks.map((player, index) => {
    return (
      <>
      <p className="tank_names" key={index}>{player?.name?.Character?.Name}</p>
      {/* <p>{availableTanks}</p> */}
      </>
    )
  });

  // state management for people who are healers
  let thoseWhoHeal = healers.map((player, index) => {
    return (
      <>
        <p className="healer_names" key={index}>{player?.name?.Character?.Name}</p>
        {/* <p>{availableHealers}</p> */}
      </>
    )
  });

  // state management for people who are dps
  let thoseWhoDPS = dps.map((player, index) => {
    return (
      <>
        <p className="dps_names" key={index}>{player?.name?.Character?.Name}:</p>
        {/* <p>{availableDPS}</p> */}
      </>
    )
  });

  return (
    <section className="section">
      <div className="rosterBlock">
      {/* Displaying the whole roster */}
      <h2 className="h2">Roster</h2>
      {roster}
      </div>
      <div className="tankBlock">
      {/* Displaying the players who are assigned as tanks */}
      <h2 className="h2"> Tanks</h2>
      {thoseWhoTank}
      </div>
      <div className="healerBlock">
      {/* Displaying the players who are assigned as healers */}
      <h2 className="h2">Healers</h2>
      {thoseWhoHeal}
      </div>
      <div className="dpsBlock">
      {/* Displaying the who are assigned as DPS */}
      <h2 className="h2">DPS</h2>
      {thoseWhoDPS}
      </div>
      <button className="wipe_team" onClick={() => clearAll()}>Remove all assignments.</button>
      <Footer />
    </section>
  );
};

export default Roster;