import axios from 'axios';

export function getAccessAutoCompleteHaveError(bool) {
    return {
        type: 'GETACCESS_AUTO_COMPLETE_HAVE_ERROR',
        hasError: bool
    };
}

export function getAccessAutoCompleteAreLoading(bool) {
    return {
        type: 'GETACCESS_AUTO_COMPLETE_ARE_LOADING',
        isLoading: bool
    };
}


export function getAccessFetchDataAutoCompleteSuccess(api) {
    return {
        type: 'GETACCESS_FETCH_DATA_AUTO_COMPLETE_SUCCESS',
        api
    };
}

export function getAccessFetchDataSearch (url, data) {
    return (dispatch) => {
        dispatch(getAccessAutoCompleteAreLoading(true));

        setTimeout(() => {
            axios.post(url, data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(getAccessAutoCompleteAreLoading(false));

                    return response;
                })
                .then((response) => {
                    dispatch(dispatch(getAccessFetchDataAutoCompleteSuccess(response.data))
                    (response.data))
                })
                .catch(() => dispatch(getAccessAutoCompleteHaveError(true)));
        }, 1);
    };
}