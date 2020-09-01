export function favoriteDetailHaveError(state = false, action) {
    switch (action.type) {
        case 'FAVORITE_DETAIL_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function favoriteDetailAreLoading(state = false, action) {
    switch (action.type) {
        case 'FAVORITE_DETAIL_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function favoriteDetail(state = [], action) {
    switch (action.type) {
        case 'FAVORITEDETAIL_FETCH_DATA_SUCCESS':
            console.log(action);
            return action.api.school;

        default:
            return state;
    }
}


export function favoriteDetailSMP(state = [], action) {
    switch (action.type) {
        case 'FAVORITEDETAIL_FETCH_DATA_SUCCESS_SMP':
            console.log(action);
            return action.api.school;

        default:
            return state;
    }
}

export function favoriteDetailSMA(state = [], action) {
    switch (action.type) {
        case 'FAVORITEDETAIL_FETCH_DATA_SUCCESS_SMA':
            return action.api.school;

        default:
            return state;
    }
}