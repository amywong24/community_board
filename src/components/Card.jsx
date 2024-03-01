import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.image} alt={props.name}></img>
                <h3>{props.name}</h3>
                <a href={props.link}>
                    <button>View Site</button>
                </a>
            </div>
        </>
    );
};

export default Card;