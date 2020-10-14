import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallCard-container">
            <div>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}
export default CardPequeno