import { AxiosInstance, AxiosResponse } from 'axios';

const getResponseData = (response: AxiosResponse) => {
	try {
		const { data } = response ?? {};
		if (typeof data === 'undefined') {
			console.error('Ошибка получения данных от SWAPI', response);
			return {};
		}
		return data;
	}
	catch (e) {
		console.error(e);
	}
	return {};
};

const checkResponse = (response: AxiosResponse) => getResponseData(response);

const checkResponseError = ({response}: {response: AxiosResponse}) => getResponseData(response);

export const interceptors = (api: AxiosInstance) => {
	api.interceptors.response.use(checkResponse, checkResponseError);
};
