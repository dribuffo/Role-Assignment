//dependencies
import './Footer.css'
import guildCrest from '../images/crest.png'

//links
let guildSite = 'https://na.finalfantasyxiv.com/lodestone/freecompany/9236179148295113228/';

const Footer = () => {
    return (
        <footer>
            <a href={guildSite}><img className="i-foot" src={guildCrest} alt="guild crest" /></a>
            <p>Created by Zebix Rune of Balmung</p>
            <img className="i-foot" src="https://p7.hiclipart.com/preview/733/367/623/final-fantasy-xiv-stormblood-final-fantasy-xv-final-fantasy-xiv-heavensward-world-of-warcraft-final-fantasy-thumbnail.jpg" alt="meteor symbol" />
        </footer>
    )
}

export default Footer;