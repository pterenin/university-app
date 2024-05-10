import Button from 'react-bootstrap/Button';
import { University } from '../types';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/store';

interface UniversityRawProps {
    university: University;
    index: number;
    onAddFavourite: (university: University) => void;
    onRemoveFavourite: (university: University) => void;
}

const UniversityRaw: React.FC<UniversityRawProps> = ({ university, index, onAddFavourite, onRemoveFavourite }) => {

    const favouriteMap = useSelector((state: AppState) => state.favourites.favoriteMap);

    const isInFavorites = (university: University): boolean => {
        return !!favouriteMap[university.name];
    }

    const isFavotite = isInFavorites(university);
    return <tr key={university.name}>
        <td>{index}</td>
        <td>{university.name}</td>
        <td>{university['state-province']}</td>
        <td><a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">Visit</a></td>
        <td>
            {isFavotite && <Button variant="danger" onClick={() => onRemoveFavourite(university)}>
                Remove from Favourites
            </Button>}
            {!isFavotite && <Button variant="primary" onClick={() => onAddFavourite(university)}>
                Add to Favourites
            </Button>}

        </td>
    </tr>
}

export default UniversityRaw;