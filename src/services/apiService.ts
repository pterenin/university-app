import axios from 'axios';

interface FetchUniversitiesParams {
    country: string;
    name?: string;
}

const apiClient = axios.create({
    baseURL: 'http://universities.hipolabs.com/search',
});

export const fetchUniversities = async ({ country, name }: FetchUniversitiesParams) => {
    const response = await apiClient.get('', { params: { country, name } });
    return response;
};