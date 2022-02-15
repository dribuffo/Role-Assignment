//dependencies
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './Player.css';

//images
import pld from '../images/FFXIVIcons/01_TANK/Job/Paladin.png';
import war from '../images/FFXIVIcons/01_TANK/Job/Warrior.png';
import drk from '../images/FFXIVIcons/01_TANK/Job/DarkKnight.png';
import gnb from '../images/FFXIVIcons/01_TANK/Job/Gunbreaker.png';
import ast from '../images/FFXIVIcons/02_HEALER/Job/Astrologian.png';
import sch from '../images/FFXIVIcons/02_HEALER/Job/Scholar.png';
import whm from '../images/FFXIVIcons/02_HEALER/Job/WhiteMage.png';
import sge from '../images/FFXIVIcons/02_HEALER/Job/Sage.png';
import brd from '../images/FFXIVIcons/03_DPS/Job/Bard.png';
import blm from '../images/FFXIVIcons/03_DPS/Job/BlackMage.png';
import dnc from '../images/FFXIVIcons/03_DPS/Job/Dancer.png';
import drg from '../images/FFXIVIcons/03_DPS/Job/Dragoon.png';
import mch from '../images/FFXIVIcons/03_DPS/Job/Machinist.png';
import mnk from '../images/FFXIVIcons/03_DPS/Job/Monk.png';
import nin from '../images/FFXIVIcons/03_DPS/Job/Ninja.png';
import rdm from '../images/FFXIVIcons/03_DPS/Job/RedMage.png';
import sam from '../images/FFXIVIcons/03_DPS/Job/Samurai.png';
import smn from '../images/FFXIVIcons/03_DPS/Job/Summoner.png';
import rpr from '../images/FFXIVIcons/03_DPS/Job/Reaper.png';
import blu from '../images/FFXIVIcons/06_LIMITED/BlueMage.png';
import btn from '../images/FFXIVIcons/05_GATHERER/Botanist.png';
import fsh from '../images/FFXIVIcons/05_GATHERER/Fisher.png';
import min from '../images/FFXIVIcons/05_GATHERER/Miner.png';
import alc from '../images/FFXIVIcons/04_CRAFTER/Alchemist.png';
import arm from '../images/FFXIVIcons/04_CRAFTER/Armorer.png';
import bsm from '../images/FFXIVIcons/04_CRAFTER/Blacksmith.png';
import crp from '../images/FFXIVIcons/04_CRAFTER/Carpenter.png';
import cul from '../images/FFXIVIcons/04_CRAFTER/Culinarian.png';
import gsm from '../images/FFXIVIcons/04_CRAFTER/Goldsmith.png';
import ltw from '../images/FFXIVIcons/04_CRAFTER/Leatherworker.png';
import wvr from '../images/FFXIVIcons/04_CRAFTER/Weaver.png';
import none from '../images/FFXIVIcons/00_ROLE/TankRole.png'

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

  // displays the players active/most recent active job under their name:
      let activeJob = player?.Character?.ActiveClassJob?.UnlockedState?.Name;
      let icon = '';
      switch(activeJob) {
        case "Paladin":
          icon= pld
          break;
        case "Warrior":
          icon= war
          break;
        case "Dark Knight":
          icon= drk
          break;
        case "Gunbreaker":
          icon= gnb
          break;
        case "Astrologian":
          icon= ast
          break;
        case "Scholar":
          icon= sch
          break;
        case "White Mage":
          icon= whm
          break;
        case "Sage":
          icon= sge
          break;
        case "Bard":
          icon= brd
          break;
        case "Black Mage":
          icon= blm
          break;
        case "Dancer":
          icon= dnc
          break;
        case "Dragoon":
          icon= drg
          break;
        case "Machinist":
          icon= mch
          break;
        case "Monk":
          icon= mnk
          break;
        case "Ninja":
          icon= nin
          break;
        case "Red Mage":
          icon= rdm
          break;
        case "Samurai":
          icon= sam
          break;
        case "Summoner":
          icon= smn
          break;
        case "Reaper":
          icon= rpr
          break;
        case "Blue Mage":
          icon= blu
          break;
        case "Botanist":
          icon= btn
          break;
        case "Fisher":
          icon= fsh
          break;
        case "Miner":
          icon= min
          break;
        case "Alchemist":
          icon= alc
          break;
        case "Armorer":
          icon= arm
          break;
        case "Blacksmith":
          icon= bsm
          break;
        case "Carpenter":
          icon= crp
          break;
        case "Culinarian":
          icon= cul
          break;
        case "Goldsmith":
          icon= gsm
          break;
        case "Leatherworker":
          icon= ltw
          break;
        case "Weaver":
          icon= wvr
          break;
        default:
          icon= none
          break;
      }
 
    return (
      <div>
        {/*Output Name */}
        <h4> {player?.Character?.Name}</h4> 
        <img src={icon} alt="job icon" onClick={() => handleMyRaidTeam(player)}/>
        <button className="add_button" onClick={() => handleMyRaidTeam(player)}>Add to Raid Roster</button>
      </div>
    );
  };
  
  export default Player;