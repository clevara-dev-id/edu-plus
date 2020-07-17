import axios from 'axios';

export function searchpageHaveError(bool) {
    return {
        type: 'SEARCHPAGE_HAVE_ERROR',
        hasError: bool
    };
}

export function searchpageAreLoading(bool) {
    return {
        type: 'SEARCHPAGE_ARE_LOADING',
        isLoading: bool
    };
}

export function searchpageFetchDataProvSuccess(api) {
    return {
        type: 'SEARCHPAGE_FETCH_DATA_SUCCESS',
        api
    };
}

export function searchpageFetchDataCitySuccess(api) {
    return {
        type: 'SEARCHPAGE_FETCH_DATA_SUCCESS_CITY',
        api
    };
}


export function searchpageFetchDataDistrictSuccess(api) {
    return {
        type: 'SEARCHPAGE_FETCH_DATA_SUCCESS_DISTRICT',
        api
    };
}

export function searchpageFetchProvData(url) {
    return (dispatch) => {
        dispatch(searchpageAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(searchpageAreLoading(false));
                    return response;
                })
                .then((response) => dispatch(searchpageFetchDataProvSuccess(response.data)))
                .catch(() => dispatch(searchpageHaveError(true)));
        }, 500);
    };
}

export function searchpageFetchCityData(url) {
    return (dispatch) => {
            // dispatch(searchpageAreLoading(true));
    
            setTimeout(() => {
                axios.get(url)
                    .then((response) => {
                        // console.log(response.data);
                        if (response.status !== 200) {
                            throw Error(response.statusText);
                        }
    
                        dispatch(searchpageAreLoading(false));
                        return response;
                    })
                    .then((response) => dispatch(searchpageFetchDataCitySuccess(response.data)))
                    .catch(() => dispatch(searchpageHaveError(true)));
        }, 500);
    };
}

export function searchpageFetchDistrictData(url) {
    return (dispatch) => {
            // dispatch(searchpageAreLoading(true));
    
            setTimeout(() => {
                axios.get(url)
                    .then((response) => {
                        console.log(response.data);
                        if (response.status !== 200) {
                            throw Error(response.statusText);
                        }
    
                        dispatch(searchpageAreLoading(false));
                        return response;
                    })
                    .then((response) => dispatch(searchpageFetchDataDistrictSuccess(response.data)))
                    .catch(() => dispatch(searchpageHaveError(true)));
        }, 500);
    };
}