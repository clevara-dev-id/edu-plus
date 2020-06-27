export function detailHaveError(state = false, action) {
    switch (action.type) {
        case 'DETAIL_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function detailAreLoading(state = false, action) {
    switch (action.type) {
        case 'DETAIL_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function detail(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            return action.api;

        default:
            return state;
    }
}

export function getCityDataSchools(state = [], action) {
    switch (action.type) {
        case 'FETCH_DATA_CITY_SUCCESS':
            return action.api.data.data;

        default:
            return state;
    }
}
