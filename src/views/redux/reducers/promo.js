export function promoHaveError(state = false, action) {
    switch (action.type) {
        case 'PROMO_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function promoAreLoading(state = false, action) {
    switch (action.type) {
        case 'PROMO_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function promoPage(state = [], action) {
    switch (action.type) {
        case 'PROMO_FETCH_DATA_SUCCESS':
            console.log(action);
            return action.api.promo.data;

        default:
            return state;
    }
}