export function favoriteDetailProvDataHaveError(state = false, action) {
    switch (action.type) {
        case 'FAVORITE_DETAIL_PROV_DATA_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function favoriteDetailProvDataAreLoading(state = false, action) {
    switch (action.type) {
        case 'FAVORITE_DETAIL_PROV_DATA_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function favoriteDetailProvData(state = [], action) {
    switch (action.type) {
        case 'FAVORITE_DETAIL_PROV_DATA_FETCH_DATA_SUCCESS':
            // console.log(action);
            return action.api.province_name.name;

        default:
            return state;
    }
}

