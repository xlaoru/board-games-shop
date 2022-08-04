import React from 'react';
import './Games.css'

const Games = (props) => {
    return (
        <div className='game-cell'>
            <img src={props.image} alt="game" />
            <span>
                <p>{props.title}</p>
                <p>{props.cost} грн</p>
            </span>
            <button className='add-to-cart' data-key={props.articul}>Добавить в корзину</button>
        </div>
    );
};

export default Games;