import React from "react";
import Passionate from "../images/passionate.svg";
import Resourceful from "../images/resourceful.svg";
import Friendly from "../images/friendly.svg";

interface CardProps {
    title: string,
    about:string
}

const ICONS: Record< string, string> = {
    passionate: Passionate,
    resourceful: Resourceful,
    friendly: Friendly
}

const Card: React.FC<CardProps> = ({ title, about}) => {
    const icon = ICONS[title.toLowerCase()]    
    return(
        <div className="section">
        <img src={icon} alt="alt={`icon of ${title} `" className="img-icon"/>
        <h2>{title.toUpperCase()}</h2>
        <p>{about}</p>
        </div>       
    )
}

export default Card