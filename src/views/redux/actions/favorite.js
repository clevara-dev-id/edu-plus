import axios from 'axios';

export function favoriteHaveError(bool) {
    return {
        type: 'FAVORITE_HAVE_ERROR',
        hasError: bool
    };
}

export function favoriteAreLoading(bool) {
    return {
        type: 'FAVORITE_ARE_LOADING',
        isLoading: bool
    };
}

export function favoriteFetchDataSuccess(api) {
    return {
        type: 'FAVORITE_FETCH_DATA_SUCCESS',
        api
    };
}

export function favoriteFetchDataSuccessSMP(api) {
    return {
        type: 'FAVORITE_FETCH_DATA_SUCCESS_SMP',
        api
    };
}

export function favoriteFetchDataSuccessSMA(api) {
    return {
        type: 'FAVORITE_FETCH_DATA_SUCCESS_SMA',
        api
    };
}

export function favoriteFetchData(url) {
    return (dispatch) => {
        dispatch(favoriteAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(favoriteAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(favoriteFetchDataSuccess(response.data)))
                .catch(() => dispatch(favoriteHaveError(true)));
        
               
        }, 500);
    };
}

export function favoriteFetchDataSMP(url) {
    return (dispatch) => {
        dispatch(favoriteAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(favoriteAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(favoriteFetchDataSuccessSMP(response.data)))
                .catch(() => dispatch(favoriteHaveError(true)));
        
               
        }, 500);
    };
}

export function favoriteFetchDataSMA(url) {
    return (dispatch) => {
        dispatch(favoriteAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(favoriteAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(favoriteFetchDataSuccessSMA(response.data)))
                .catch(() => dispatch(favoriteHaveError(true)));
        
               
        }, 500);
    };
}
