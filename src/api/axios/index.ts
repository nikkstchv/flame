import axios from 'axios';
import {interceptors} from './interceptors';
import {SWAPI_URL} from '@/config/api';

const swapi = axios.create({
	baseURL: SWAPI_URL,
});

interceptors(swapi);

export {swapi};
