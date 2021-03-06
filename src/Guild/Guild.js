//dependencies
import './Guild.css'
import guildData from '../guildData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

//components
import Player from '../Player/Player'
import Footer from '../Footer/Footer'

const Guild = ({handleMyRaidTeam, handleSetPerson}) => {
  const [toggle, setToggle] = useState(false)

  let guildMembers = guildData.map((character, index) => {
    return (
      <div className="guildList" key={index}>
          <img className="avatar" src={character.pic}/>
          <Link onClick={() => setToggle(!toggle)} to={'/Guild/'+character.id}>{character.name} </Link>
      </div>
    )
  });

    return (
      <div className="mainBody"> 
        <section className="mainCharacter">{<Player toggle={toggle} handleMyRaidTeam={handleMyRaidTeam} handleSetPerson={handleSetPerson}/>}</section>
        {guildMembers}
        <Footer />
      </div>
    );
  };
  
  export default Guild;