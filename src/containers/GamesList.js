import React, { useState, createRef } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {
    selectGames
} from '../store/GamesSlice'
import Games from '../components/Games'
import {increment} from '../store/CartSlice'

const GamesList = () => {
    const games = useSelector(selectGames)
    const dispatch = useDispatch()
    
    let gamesField = createRef()

    function clickHandler(event) {
        event.preventDefault();
        let t = event.target
        if (!t.classList.contains('add-to-cart')) return true
        dispatch(increment(t.getAttribute('data-key')))
    }

    const [value, setValue] = useState('')

    const filteredContent = games.filter(
        content => {
            return content.title.toLowerCase().includes(value.toLowerCase())
        }
    )

    return (
        <div>
            <div className="GameSearcher">
                <form action="">
                    <input 
                    type="text" 
                    placeholder="Введите название игры"
                    className="searcher"
                    onChange={(event) => setValue(event.target.value)}
                    />
                </form>
            </div>

            <div className='games-field' onClick={clickHandler} ref={gamesField}>
                {filteredContent.map(item => <Games className="game-cell" title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} altImg={item.title} />)}
            </div>
        </div>
    );
};

export default GamesList;