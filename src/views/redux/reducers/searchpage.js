export function searchpageHaveError(state = false, action) {
    switch (action.type) {
        case 'SEARCHPAGE_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function searchpageAreLoading(state = false, action) {
    switch (action.type) {
        case 'SEARCHPAGE_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function searchpageprov(state = [], action) {
    switch (action.type) {
        case 'SEARCHPAGE_FETCH_DATA_SUCCESS':
            return action.api.province;

        default:
            return state;
    }
}

export function searchpagecity(state = [], action) {
    switch (action.type) {
        case 'SEARCHPAGE_FETCH_DATA_SUCCESS_CITY':
            return action.api.data;

        default:
            return state;
    }
}

export function searchpagedistrict(state = [], action) {
    switch (action.type) {
        case 'SEARCHPAGE_FETCH_DATA_SUCCESS_DISTRICT':
            return action.api.data;
        default:
            return state;
    }
}
