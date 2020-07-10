import axios from 'axios';

export function promoHaveError(bool) {
    return {
        type: 'PROMO_HAVE_ERROR',
        hasError: bool
    };
}

export function promoAreLoading(bool) {
    return {
        type: 'PROMO_ARE_LOADING',
        isLoading: bool
    };
}

export function promoFetchDataSuccess(api) {
    return {
        type: 'PROMO_FETCH_DATA_SUCCESS',
        api
    };
}

export function promoFetchData (url) {
    return (dispatch) => {
        dispatch(promoAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(promoAreLoading(false));

                    return response;
                })
                .then((response) => {
                    dispatch(promoFetchDataSuccess(response.data))
                })
                .catch(() => dispatch(promoHaveError(true)));
        }, 250);
    };
}

