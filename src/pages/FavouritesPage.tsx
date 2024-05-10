import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UniversityTable from '../components/UniversityTable';
import { removeFavourite } from '../redux/slices/favouritesSlice';
import { AppState } from '../redux/store';
import { University } from "../types"

const FavouritesPage: React.FC = () => {
    const favourites = useSelector((state: AppState) => state.favourites.items);
    const dispatch = useDispatch();

    const handleRemoveFavourite = (university: University) => {
        dispatch(removeFavourite(university));
    };

    return (
        <div className='table-container'>
            <h1>Favourites</h1>
            <UniversityTable
                universities={favourites}
                onAddFavourite={() => { }}
                onRemoveFavourite={handleRemoveFavourite}
            />
        </div>
    );
};

export default FavouritesPage;
