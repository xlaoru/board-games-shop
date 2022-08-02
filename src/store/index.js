import {configureStore} from '@reduxjs/toolkit'
import gamesReducer from './GamesSlice'
import cartReducer from './CartSlice'

export default configureStore({
    reducer: {
        games: gamesReducer,
        cart: cartReducer
    },
})