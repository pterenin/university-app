import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { CountryDropdown } from 'react-country-region-selector';

interface SearchBarProps {
    onSearch: (value: string) => void;
    clearFilters: () => void;
    setCountry: (value: string) => void;
    country: string;
    searchTerm: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchTerm, clearFilters, setCountry, country }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <CountryDropdown
                    value={country}
                    classes="form-control"
                    onChange={setCountry} />
                <input
                    type="text"
                    value={searchTerm}
                    className="form-control"
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Search by name..." />
                <Button variant="success" onClick={clearFilters}>Clear</Button>
            </Container>
        </Navbar>
    );
};

export default SearchBar;