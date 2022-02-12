import React  from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import guildCrest from '../images/crest.png'

let freeTrial = "https://freetrial.finalfantasyxiv.com/"
let logo = "https://static.wikia.nocookie.net/finalfantasy/images/b/b3/FFXIV_logo.png"

function Home() {
    return (
      <div className="homepage">
         <Link to='/Guild'> <img className="crest" src={guildCrest} alt="guild crest"/> </Link>
        <h3>Click above to Enter! </h3>
        <p></p>
        <h1>Welcome to my job picker app for my Final Fantasy 14 guild!</h1>
        <h3>Click the below image to learn about the free trial!</h3>
        <a href={freeTrial}> <img className="logo" src={logo} alt="final fantasy xiv logo"/> </a>
      </div>
    );
}

export default Home;
