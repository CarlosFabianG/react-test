import React from 'react';


export const Card = ({title, state, labels}) => {
    return(
        <div className="card" >
            <div className="card-body">
                <h3>{title}</h3>
                <p className="card-text span-card"><span>State: </span>{state}</p>
                <div className="card-text">
                    Labels:
                    { labels.map((item, i) => <span key={i}> - {item.name}</span>)}
                </div>
            </div>
        </div>
    );
};
