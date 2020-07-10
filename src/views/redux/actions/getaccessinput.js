import axios from 'axios';

export function getaccessInputHaveError(bool) {
    return {
        type: 'GETACCESS_INPUT_HAVE_ERROR',
        hasError: bool
    };
}

export function getaccessInputAreLoading(bool) {
    return {
        type: 'GETACCESS_INPUT_ARE_LOADING',
        isLoading: bool
    };
}

export function getaccessInputFetchDataSuccess(api) {
    return {
        type: 'GETACCESS_INPUT_FETCH_DATA_SUCCESS',
        api
    };
}

export function getaccessInputFetchData (url) {
    return (dispatch) => {
        dispatch(getaccessInputAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(getaccessInputAreLoading(false));

                    return response;
                })
                .then((response) => {
                    dispatch(getaccessInputFetchDataSuccess(response.data))
                })
                .catch(() => dispatch(getaccessInputHaveError(true)));
        }, 250);
    };
}

