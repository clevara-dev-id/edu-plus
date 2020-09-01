import axios from 'axios';

export function detailCityHaveError(bool) {
    return {
        type: 'DETAIL_CITY_HAVE_ERROR',
        hasError: bool
    };
}

export function detailCityAreLoading(bool) {
    return {
        type: 'DETAIL_CITY_ARE_LOADING',
        isLoading: bool
    };
}

export function detailCityFetchDataSuccess(api) {
    return {
        type: 'DETAIL_CITY_FETCH_DATA_SUCCESS',
        api
    };
}

export function fetchDataCity(url, data) {
    return (dispatch) => {
        dispatch(detailCityAreLoading(true));
        setTimeout(() => {
            axios.post(url, data)
                .then((response) => {
                    console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
                    dispatch(detailCityAreLoading(false));
                    return response;
                })
                .then(async(response) => {
                    dispatch(detailCityFetchDataSuccess(response.data))
                })
                .catch(() => dispatch(detailCityHaveError(true)));      
        }, 500);
    };
}