import axios from 'axios';

export function favoriteDetailHaveError(bool) {
    return {
        type: 'FAVORITE_DETAIL_HAVE_ERROR',
        hasError: bool
    };
}

export function favoriteDetailAreLoading(bool) {
    return {
        type: 'FAVORITE_DETAIL_ARE_LOADING',
        isLoading: bool
    };
}

export function favoriteDetailFetchDataSuccess(api) {
    // console.log(api);
    return {
        type: 'FAVORITEDETAIL_FETCH_DATA_SUCCESS',
        api
    };
}

export function favoriteDetailFetchDataSuccessSMP(api) {
    return {
        type: 'FAVORITEDETAIL_FETCH_DATA_SUCCESS_SMP',
        api
    };
}

export function favoriteDetailFetchDataSuccessSMA(api) {
    return {
        type: 'FAVORITEDETAIL_FETCH_DATA_SUCCESS_SMA',
        api
    };
}

export function favoriteDetailFetchCityNameSuccess(api) {
    return {
        type: 'FAVORITEDETAIL_FETCH_CITYNAME_SUCCESS',
        api
    };
}

export function favoriteDetailFetchProvNameSuccess(api) {
    return {
        type: 'FAVORITEDETAIL_FETCH_PROVNAME_SUCCESS',
        api
    };
}

export function favoriteDetailFetchData(url, data) {
    return (dispatch) => {
        dispatch(favoriteDetailAreLoading(true));

        setTimeout(() => {
            axios.get(url,data)
                .then((response) => {
                    console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(favoriteDetailAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(favoriteDetailFetchDataSuccess(response.data)))
                .catch(() => dispatch(favoriteDetailHaveError(true)));
        
               
        }, 500);
    };
}

export function favoriteDetailFetchDataSMP(url, data) {
    return (dispatch) => {
        dispatch(favoriteDetailAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(favoriteDetailAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(favoriteDetailFetchDataSuccessSMP(response.data)))
                .catch(() => dispatch(favoriteDetailHaveError(true)));
        
               
        }, 500);
    };
}

export function favoriteDetailFetchDataSMA(url, data) {
    return (dispatch) => {
        dispatch(favoriteDetailAreLoading(true));

        setTimeout(() => {
            axios.get(url, data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(favoriteDetailAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(favoriteDetailFetchDataSuccessSMA(response.data)))
                .catch(() => dispatch(favoriteDetailHaveError(true)));
        
               
        }, 500);
    };
}

export function favoriteDetailFetchCityName(url) {
    return (dispatch) => {
        dispatch(favoriteDetailAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(favoriteDetailAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(favoriteDetailFetchCityNameSuccess(response.data)))
                .catch(() => dispatch(favoriteDetailHaveError(true)));
        
               
        }, 500);
    };
}

export function favoriteDetailFetchProvName(url){
    return (dispatch) => {
        dispatch(favoriteDetailAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(favoriteDetailAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(favoriteDetailFetchProvNameSuccess(response.data)))
                .catch(() => dispatch(favoriteDetailHaveError(true)));
        
               
        }, 500);
    };
}