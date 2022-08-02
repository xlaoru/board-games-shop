import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {
    selectGames
} from '../store/GamesSlice'
import Games from '../components/Games'
import {increment} from '../store/CartSlice'
import './GamesList.css'

const GamesList = () => {
    const games = useSelector(selectGames)
    const dispatch = useDispatch()

    function clickHandler(event) {
        event.preventDefault();
        let t = event.target
        if (!t.classList.contains('add-to-cart')) return true
        dispatch(increment(t.getAttribute('data-key')))
    }

    return (
        <div>
            <div className='games-field' onClick={clickHandler}>
                {games.map(item => <Games title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} />)}
            </div>
        </div>
    );
};

export default GamesList;