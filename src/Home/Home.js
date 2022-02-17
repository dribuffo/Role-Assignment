//dependencies
import React  from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import guildCrest from '../images/crest.png'

//images
let freeTrial = "https://freetrial.finalfantasyxiv.com/"
let logo = "https://static.wikia.nocookie.net/finalfantasy/images/b/b3/FFXIV_logo.png"
let arrLogo = "https://img.finalfantasyxiv.com/lds/promo/h/r/l6eq3BOhy145X-sULOMDJFWUmg.png"
let hwLogo = "https://img.finalfantasyxiv.com/lds/promo/h/7/HzOhLvFB0AgVs9BfnEMvO8pRVI.png"
let sbLogo = "https://static.wikia.nocookie.net/finalfantasy/images/8/83/FFXIV_Stormblood.png";
let shbLogo = "https://img.finalfantasyxiv.com/lds/promo/h/M/jmK4Q5CcFnBD1FfV90aw1zeUG8.png";
let ewLogo = "https://img.finalfantasyxiv.com/lds/promo/h/A/eqkthVf5uqxgBzUv66zhucFFh4.png";

//video
let arr = "https://www.youtube.com/watch?v=h542YbZuwkQ";
let heavensward = "https://www.youtube.com/watch?v=pAoBojYsuOI";
let stormblood = "https://www.youtube.com/watch?v=Jt1h1MinlLI";
let shadowbringers = "https://www.youtube.com/watch?v=4tyuIh12_HU";
let endwalker = "https://www.youtube.com/watch?v=zTTtd6bnhFs";


function Home() {
    return (
      <div className="homepage">
         <Link to='/Guild/:id'> <img className="crest" src={guildCrest} alt="guild crest"/> </Link>
        <h3>Click above to Enter! </h3>
        <h1>Welcome to my job picker app for my Final Fantasy 14 guild!</h1>
        <a href={freeTrial}> <img className="logo" src={logo} alt="final fantasy xiv logo"/> </a>
        <h3>Click the above image to learn about the free trial!</h3>
        <h3 className="trailersText"> Or click below if you're interested in watching some trailers!</h3>
        <section className="trailers">
          <a href={arr} id="arr"> <img className="trailerLogo" src={arrLogo} alt="final fantasy xiv logo"/> </a>
          <a href={heavensward} id="hw"> <img className="trailerLogo" src={hwLogo} alt="final fantasy xiv logo"/> </a>
          <a href={stormblood} id="sb"><img className="trailerLogo" src={sbLogo} alt="final fantasy xiv logo"/> </a>
          <a href={shadowbringers} id="shb"> <img className="trailerLogo" src={shbLogo} alt="final fantasy xiv logo"/> </a>
          <a href={endwalker} id="ew"> <img className="trailerLogo" src={ewLogo} alt="final fantasy xiv logo"/> </a>
        </section>
      </div>
    );
}

export default Home;
