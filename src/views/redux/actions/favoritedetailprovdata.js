import axios from 'axios';

export function favoriteDetailProvDataHaveError(bool) {
    return {
        type: 'FAVORITE_DETAIL_PROV_DATA_HAVE_ERROR',
        hasError: bool
    };
}

export function favoriteDetailProvDataAreLoading(bool) {
    return {
        type: 'FAVORITE_DETAIL_PROV_DATA_ARE_LOADING',
        isLoading: bool
    };
}

export function favoriteDetailProvDataFetchDataSuccess(api) {
    // console.log(api);
    return {
        type: 'FAVORITE_DETAIL_PROV_DATA_FETCH_DATA_SUCCESS',
        api
    };
}

export function favoriteDetailProvFetchData(url, data) {
    return (dispatch) => {
        dispatch(favoriteDetailProvDataAreLoading(true));

        setTimeout(() => {
            axios.get(url,data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(favoriteDetailProvDataAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(favoriteDetailProvDataFetchDataSuccess(response.data)))
                .catch(() => dispatch(favoriteDetailProvDataHaveError(true)));
        
               
        }, 500);
    };
}
