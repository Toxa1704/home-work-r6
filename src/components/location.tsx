import React from "react";
import Canada from "../images/canada.svg";
import Australia from "../images/australia.svg";
import UnitedKingdom from "../images/united.svg"

interface CardProps {
    title:string
}

const ICONS: Record< string, string> = {
    canada: Canada,
    australia: Australia,
    united: UnitedKingdom
}

const pattern = /\w+/m

const CardLocation: React.FC<CardProps> = ({ title}) => {
    
    const item: RegExpMatchArray | null = title.match(pattern)
    const icon = ICONS[item[0].toLowerCase()]
    console.log(item);
    
    
    console.log(icon);
    return(
        <div className="location-section">
        <img src={icon} alt="alt={`icon of ${title} `" className="img-icon"/>
        <h2>{title.toUpperCase()}</h2>
        <button>see location</button>
        </div>      
    )
}
export default CardLocation