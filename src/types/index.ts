export interface University {
    name: string;
    'state-province': string | null;
    web_pages: string[];
}

export interface UniversityProps {
    universities: University[];
    onAddFavourite: (university: University) => void;
    onRemoveFavourite: (university: University) => void;
}

export interface DropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
}