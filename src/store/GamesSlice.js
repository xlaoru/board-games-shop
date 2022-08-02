import React from 'react';
import { createSlice } from "@reduxjs/toolkit";
import gamesList from '../data/games.json'

export const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        games: gamesList
    },
    reducers: {
        
    }
})

export const {} = gamesSlice.actions
export const selectGames = state => state.games.games
export default gamesSlice.reducer