import { findAllByTitle } from '@testing-library/react';
import React from 'react';


export const Card = ({title, state, labels}) => {
    return(
        <div>
            <div>
                <h3>{title}</h3>
                <p>{state}</p>
                <div>
                    Labels:
                    { labels.map((item, i) => <span key={i}>{item.name}</span>)}
                </div>
            </div>
        </div>
    )
}

