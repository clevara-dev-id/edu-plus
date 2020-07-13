import axios from 'axios';

export function getAccessHaveError(bool) {
    return {
        type: 'GETACCESS_HAVE_ERROR',
        hasError: bool
    };
}

export function getAccessAreLoading(bool) {
    return {
        type: 'GETACCESS_ARE_LOADING',
        isLoading: bool
    };
}

export function getAccessFetchDataSuccess(api) {
    return {
        type: 'GETACCESS_FETCH_DATA_SUCCESS',
        api
    };
}

export function getAccessFetchData (url, data) {
    return (dispatch) => {
        dispatch(getAccessAreLoading(true));

        setTimeout(() => {
            axios.post(url, data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(getAccessAreLoading(false));

                    return response;
                })
                .then((response) => {
                    dispatch(getAccessFetchDataSuccess(response.data))
                })
                .catch(() => dispatch(getAccessHaveError(true)));
        }, 100);
    };
}

