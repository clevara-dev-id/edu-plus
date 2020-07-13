export function getAccessAutoCompleteHaveError(state = false, action) {
    switch (action.type) {
        case 'GETACCESS_AUTO_COMPLETE_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function getAccessAutoCompleteAreLoading(state = false, action) {
    switch (action.type) {
        case 'GETACCESS_AUTO_COMPLETE_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function getAccessAutoComplete(state = [], action) {
    switch (action.type) {
        case 'GETACCESS_FETCH_DATA_AUTO_COMPLETE_SUCCESS':
            return action.api.data.data;
        default:
            return state;
    }
}