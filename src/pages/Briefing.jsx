import { Link } from "react-router-dom";
import mouse from "../assets/mouse.png"

export function Briefing() {
    return (
        <Link to={"/operation"} id="briefing">
            <h2>BRIEFING</h2>
            <h3>OPERATION ""TACTICAL THUNDER""</h3>
            <p> Welcome aboard the Super Destroyer, helldiver! You are now the lifeline of our brave Helldivers fighting on the front lines! Your mission is <span>crucial</span>: deploy stratagems with <span>precision</span> and <span>speed</span> to ensure the survival and victory of our forces on the ground! </p>
            <p>Our troops are in the heat of battle, facing hordes of alien <span>scum</span>. They depend on you to deliver the firepower, the supplies, and the reinforcements they need. Each request you fulfill brings us one step closer to safeguarding Super Earth and upholding the freedom of our <span>glorious nation!</span></p>
            <p> Remember, a true Helldiver never falters, never hesitates. Show those alien invaders the might of our stratagems and the indomitable spirit of Super Earth! Deploy with pride, deploy with honor!</p>

            <div className="mouse">
                <img className="mouse__icon" src={mouse}></img>
                <p className="mouse__text">CONTINUE</p>
            </div>

            

            
        </Link>

    )
}