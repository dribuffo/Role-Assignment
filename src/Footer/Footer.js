//dependencies
import './Footer.css'
import guildCrest from '../images/crest.png'

//links
let guildSite = 'https://na.finalfantasyxiv.com/lodestone/freecompany/9236179148295113228/';
let freeTrial = "https://freetrial.finalfantasyxiv.com/"
let rightLink = "https://img.finalfantasyxiv.com/lds/promo/h/A/eqkthVf5uqxgBzUv66zhucFFh4.png"

const Footer = () => {
    return (
        <footer>
            <a href={guildSite}><img className="iFoot" src={guildCrest} alt="guild crest" /></a>
            <p>Created by: Zebix Rune (Balmung)</p>
            <a href={freeTrial}><img className="iFoot" src={rightLink} alt="meteor symbol" /></a>
        </footer>
    )
}

export default Footer;