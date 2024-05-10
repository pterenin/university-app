import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUniversities } from '../services/apiService';
import UniversityTable from "../components/UniversityTable";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { addFavourite, removeFavourite } from '../redux/slices/favouritesSlice';
import { University } from "../types"

const DEFAULT_COUNTRY = 'Canada';

const SearchPage: React.FC = () => {
    const [country, setCountry] = useState<string>(DEFAULT_COUNTRY);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [universities, setUniversities] = useState<University[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [responseTime, setResponseTime] = useState<number>(0);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const startTime = new Date().getTime();
            let endTime;
            try {
                const response = await fetchUniversities({ country, name: searchTerm });
                endTime = new Date().getTime();
                setUniversities(response.data);
            } catch (error) {
                endTime = new Date().getTime();
                console.error('Failed to fetch universities:', error);
            }
            setResponseTime(endTime - startTime)
            setLoading(false);
        };
        fetchData();
    }, [country, searchTerm]);

    const handleAddFavourite = (university: University) => {
        dispatch(addFavourite(university));
    };

    const handleRemoveFavourite = (university: University) => {
        dispatch(removeFavourite(university));
    };

    const clearFilters = () => {
        setCountry(DEFAULT_COUNTRY);
        setSearchTerm('');
    }

    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
                setCountry={setCountry}
                country={country}
                clearFilters={clearFilters}
            />
            <div className='table-container'>
                <div className="response-time">
                    {`Latest Response Time: ${responseTime} ms`}
                </div>
                <UniversityTable
                    universities={universities}
                    onAddFavourite={handleAddFavourite}
                    onRemoveFavourite={handleRemoveFavourite}
                />
                {loading && <Spinner />}
            </div>
        </>

    );
};

export default SearchPage;
