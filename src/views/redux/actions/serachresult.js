import axios from 'axios';

export function searchResultHaveError(bool) {
    return {
        type: 'SEARCH_RESULT_HAVE_ERROR',
        hasError: bool
    };
}

export function searchResultAreLoading(bool) {
    return {
        type: 'SEARCH_RESULT_ARE_LOADING',
        isLoading: bool
    };
}

export function searchResultFetchDataSuccess(api) {
    // console.log(api);
    return {
        type: 'SEARCH_RESULT_DATA_SUCCESS',
        api
    };
}


export function searchResultFetchData(url, data) {
    return (dispatch) => {
        dispatch(searchResultAreLoading(true));

        setTimeout(() => {
            axios.post(url,data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(searchResultAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(searchResultFetchDataSuccess(response.data)))
                .catch(() => dispatch(searchResultHaveError(true)));         
        }, 500);
    };
}
