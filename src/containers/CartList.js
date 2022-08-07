import React from 'react';
import {useSelector} from 'react-redux'
import {
    selectGames
} from '../store/GamesSlice'
import {
    selectCart
} from '../store/CartSlice'
import Cart from '../components/Cart';
import {decrement, forceDelete} from '../store/CartSlice'
import {useDispatch} from 'react-redux'

const CartList = () => {
    const games = useSelector(selectGames)
    const cart = useSelector(selectCart)
    const gamesObj = games.reduce((accum, item) => {
        accum[item['articul']] = item
        return accum
    }, {})
    const dispatch = useDispatch()

    function clickHandler(event) {
        event.preventDefault()
        if (event.target.classList.contains('remove-from-cart')) {
            let data = event.target.getAttribute('data-key')
            dispatch(decrement(data))
        }
        if (event.target.classList.contains('delete-from-cart')) {
            let data = event.target.getAttribute('data-key')
            dispatch(forceDelete(data))
        }
    }

    let totallPrice = Object.keys(cart).reduce( (accum, item) => {
        accum += cart[item] * gamesObj[item]['cost'];
        return accum;
    }, 0)

    return (
        <div className='CartList' onClick={clickHandler}>
            <br />
            <div className='totall-price' style={{'display': 'flex', 'justifyContent': 'left'}}>&nbsp;&nbsp;Итоговая Цена: {totallPrice} грн</div><br />
            <hr />
            <div style={{'display': 'flex', 'justifyContent': 'left' }}>&nbsp;&nbsp; Продукт &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  Название &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  Цена &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  Кол-во продукта &nbsp;&nbsp;&nbsp;&nbsp;</div>
            {Object.keys(cart).map(item => <Cart key={item + gamesObj[item]['title']} gameName={gamesObj[item]['title']} gamesAmount={cart[item]} gameCost={gamesObj[item]['cost']} articul={item} image={gamesObj[item]['image']}/>)}
            <hr />
        </div>
    );
};

export default CartList;