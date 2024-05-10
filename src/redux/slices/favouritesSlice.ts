import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { University } from '../../types';

interface FavouritesState {
    items: University[];
    favoriteMap: { [name: string]: Boolean }
}

const loadInitialStateFromLocalStorage = (): FavouritesState => {
    const items: University[] = JSON.parse(localStorage.getItem("items") || "");
    const favoriteMap: { [name: string]: Boolean } = {};
    items.forEach(item => {
        favoriteMap[item.name] = true;
    });
    return { items, favoriteMap }
};

const initialState: FavouritesState = loadInitialStateFromLocalStorage();


const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<University>) => {
            state.items.push(action.payload);
            state.favoriteMap[action.payload.name] = true;
            localStorage.setItem("items", JSON.stringify(state.items));
        },
        removeFavourite: (state, action: PayloadAction<University>) => {
            state.items = state.items.filter(
                university => university.name !== action.payload.name
            );
            localStorage.setItem("items", JSON.stringify(state.items));
            state.favoriteMap[action.payload.name] = false;
        },
    },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
