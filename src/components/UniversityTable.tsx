import { UniversityProps } from '../types';
import Table from 'react-bootstrap/Table';
import UniversityRaw from './UniversityRaw';


const UniversityTable: React.FC<UniversityProps> = ({ universities, onAddFavourite, onRemoveFavourite }) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>State/Province</th>
                    <th>Website</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {(!universities || !universities.length) && <div className="no-items">No Items</div>}
                {universities.map((university, index) => {
                    return <UniversityRaw
                        university={university}
                        index={index}
                        onAddFavourite={onAddFavourite}
                        onRemoveFavourite={onRemoveFavourite} />
                })}
            </tbody>
        </Table>
    );
};

export default UniversityTable;
