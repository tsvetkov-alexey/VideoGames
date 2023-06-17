import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type FetchGamesArgs = {
    page: number;
    searchRequest: string;
    category: string;
};

export type Games = {
    id: string;
    imageUrl: string;
    title: string;
    desc: string;
    minPrice: number;
    avgPrice: number;
    maxPrice: number;
    category: number;
    shop1: string;
    shop2: string;
    shop3: string;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface GamesSliceState {
    items: Games[];
    status: Status;
}

const initialState: GamesSliceState = {
    items: [],
    status: Status.LOADING, //loading | success | error
};

export const fetchGames = createAsyncThunk(
    'games/fetchGamesStatus',
    async (params: FetchGamesArgs) => {
        const { page, searchRequest, category } = params;
        const { data } = await axios.get<Games[]>(
            `https://643274f83e05ff8b3726929d.mockapi.io/Games?page=${page}&limit=6${searchRequest}${category}`,
        );

        return data;
    },
);

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = Status.LOADING;
                state.items = [];
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = Status.SUCCESS;
                state.items = action.payload;
            })
            .addCase(fetchGames.rejected, (state) => {
                state.status = Status.ERROR;
                state.items = [];
            });
    },
});

export const { setItems } = gamesSlice.actions;

export default gamesSlice.reducer;
