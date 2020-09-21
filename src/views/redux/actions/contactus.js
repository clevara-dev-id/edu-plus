import axios from 'axios';

export function contactUsSendHaveError(bool) {
    return {
        type: 'CONTACTUS_SEND_HAVE_ERROR',
        hasError: bool
    };
}

export function contactUsSendAreLoading(bool) {
    return {
        type: 'CONTACTUS_SEND_ARE_LOADING',
        isLoading: bool
    };
}

export function contactUsSendDataSuccess(api) {
    return {
        type: 'CONTACTUS_SEND_DATA_SUCCESS',
        api
    };
}

export function contactUsSendData (url, data) {
    return (dispatch) => {
        dispatch(contactUsSendAreLoading(true));

        setTimeout(() => {
            axios.post(url, data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(contactUsSendAreLoading(false));

                    return response;
                })
                .then((response) => {
                    dispatch(contactUsSendDataSuccess(response.data))
                })
                .catch(() => dispatch(contactUsSendHaveError(true)));
        }, 5000);
    };
}
