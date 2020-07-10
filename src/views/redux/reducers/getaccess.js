export function getAccessHaveError(state = false, action) {
    switch (action.type) {
        case 'GETACCESS_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function getAccessAreLoading(state = false, action) {
    switch (action.type) {
        case 'GETACCESS_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function getAccess(state = [], action) {
    switch (action.type) {
        case 'GETACCESS_FETCH_DATA_SUCCESS':
            console.log(action);
            return action.api.data.data;
        default:
            return state;
    }
}

export function IsSchoolsFound(state = [], action) {
    switch (action.type) {
        case 'GETACCESS_FETCH_DATA_SUCCESS':
            console.log(action);
            return action.api.school_count;

        default:
            return state;
    }
}