//dependencies
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

//components

//Api Info
// let url = "https://xivapi.com/freecompany/search?name=Lex+Talionis&sever=Balmung"; //search for our guild ID
// let guildUrl = "https://xivapi.com/freecompany/9236179148295113228?data=FCM" //display results for guild personnel
let playerUrl = "https://xivapi.com/character/" //+character ID //returns individual character info

const Player = ({toggle, handleMyRaidTeam}) => {
    let params = useParams();
    let playerID = params.id

    const [player, setPlayer] = useState([]);

  // useEffect to call once on toggle, not an infinite loop
  useEffect(() => { 
      fetch(playerUrl + `${playerID}`, {mode: 'cors'})
      .then(response => response.json())
      .then(data => setPlayer(data))
      .catch(() => console.log("oops, it failed"))
  }, [toggle]);

    /*
      switch(player?.Character?.ActiveClassJob?.UnlockedState?.Name) {
        case: "Paladin":
          let pld = 
          src= {pld}
          break;
        case: "Warrior":
          let war = 
          src= {war}
          break;
        case: "Dark Knight":
          let drk = 
          src= {drk}
          break;
        case: "Gunbreaker":
          let gnb = 
          src= {gnb}
          break;
        case: "Astrologian":
          let ast = 
          src= {ast}
          break;
        case: "Scholar":
          let sch = 
          src= {sch}
          break;
        case: "White Mage":
          let whm = 
          src= {whm}
          break;
        case: "Bard":
          let brd = 
          src= {brd}
          break;
        case: "Black Mage":
          let blm = 
          src= {blm}
          break;
        case: "Dancer":
          let dnc = 
          src= {dnc}
          break;
        case: "Dragoon":
          let drg = 
          src= {drg}
          break;
        case: "Machinist":
          let mch = 
          src= {mch}
          break;
        case: "Monk":
          let mnk = 
          src= {mnk}
          break;
        case: "Ninja":
          let nin = 
          src= {nin}
          break;
        case: "Red Mage":
          let rdm = 
          src= {rdm}
          break;
        case: "Samurai":
          let sam = 
          src= {sam}
          break;
        case: "Summoner":
          let smn = 
          src= {smn}
          break;
        case: "Blue Mage":
          let blu = 
          src= {blu}
          break;
      }
    */


    return (
      <div>
        {/*Output Name */}
        <h4> {player?.Character?.Name} <img/></h4>
        <button onClick={() => handleMyRaidTeam(player?.Character?.Name)}>Add to Raid Team</button>
      </div>
    );
  };
  
  export default Player;