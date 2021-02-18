import React from 'react';


export const Card = ({title, state, labels}) => {
    return(
        <div className="card" >
            <div className="card-body">
                <h3>Title: {title}</h3>
                <p className="card-text">State: {state}</p>
                <div>
                    Labels:
                    { labels.map((item, i) => <span key={i}>{item.name}</span>)}
                </div>
            </div>
        </div>
    )
}

