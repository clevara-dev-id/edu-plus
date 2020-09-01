export function detailCityHaveError(state = false, action) {
    switch (action.type) {
        case 'DETAIL_CITY_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function detailCityAreLoading(state = false, action) {
    switch (action.type) {
        case 'DETAIL_CITY_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function detailCity(state = [], action) {
    switch (action.type) {
        case 'DETAIL_CITY_FETCH_DATA_SUCCESS':
            console.log(action);
            return action.api.data.data;

        default:
            return state;
    }
}