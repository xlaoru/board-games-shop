import React, { createRef } from 'react';
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
    
    let gamesField = createRef()
    let searcher = createRef()

    function clickHandler(event) {
        event.preventDefault();
        let t = event.target
        if (!t.classList.contains('add-to-cart')) return true
        dispatch(increment(t.getAttribute('data-key')))
    }

    function search(event) {
        event.preventDefault()
        let gameCellsArray = []
        for (let i = 0; i < gamesField.current.children.length; i++) {
            gameCellsArray.push(gamesField.current.children[i])
        }
        gameCellsArray.forEach(element => element.classList.add('hide'))

        let data = []
        for (let i = 0; i < games.length; i++) {
            data.push(games[i].title)
        }

        if (data.includes(searcher.current.value)) {
            gameCellsArray.filter(item => {
                if (item.querySelector('span').querySelector('p').textContent === searcher.current.value) item.classList.add('unhide')
            })
        } else if (searcher.current.value === '') {
            gameCellsArray.forEach(element => element.classList.add('unhide'))
        } else if (!data.includes(searcher.current.value)) {
            gameCellsArray.forEach(element => element.classList.add('hide'))
        } else {
            gameCellsArray.forEach(element => element.classList.add('hide'))
        }
    }

    return (
        <div>
            <div className='GameSearcher'>
                <input type="text" placeholder='Введите название игры' ref={searcher} />
                <button onClick={search}>Найти</button>
            </div>
            <div className='games-field' onClick={clickHandler} ref={gamesField}>
                {games.map(item => <Games className="game-cell" title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} altImg={item.title} />)}
            </div>
        </div>
    );
};

export default GamesList;