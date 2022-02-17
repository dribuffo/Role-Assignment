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
        <p>
          <Link onClick={() => setToggle(!toggle)} to={'/Guild/'+character.id}>{character.name} </Link>
        </p>
      </div>
    )
  });

    return (
      <div>
        {<Player toggle={toggle} handleMyRaidTeam={handleMyRaidTeam} handleSetPerson={handleSetPerson}/>}
        {guildMembers}
        <Footer />
      </div>
    );
  };
  
  export default Guild;