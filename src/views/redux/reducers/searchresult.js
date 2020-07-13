export function searchResultHaveError(state = false, action) {
    switch (action.type) {
        case 'SEARCH_RESULT_HAVE_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export function searchResultAreLoading(state = false, action) {
    switch (action.type) {
        case 'SEARCH_RESULT_ARE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function searchResult(state = [], action) {
    switch (action.type) {
        case 'SEARCH_RESULT_DATA_SUCCESS':
            return action.api.data.data;
        default:
            return state;
    }
}

export function currentSearchResult(state = [], action) {
    switch (action.type) {
        case 'SEARCH_RESULT_DATA_SUCCESS':
            return action.api.data.current_page;
        default:
            return state;
    }
}

export function countSearchResult(state = [], action) {
    switch (action.type) {
        case 'SEARCH_RESULT_DATA_SUCCESS':
            return action.api.result_count;
        default:
            return state;
    }
}

export function stageSearchResult(state = [], action) {
    switch (action.type) {
        case 'SEARCH_RESULT_DATA_SUCCESS':
            return action.api.stage;
        default:
            return state;
    }
}