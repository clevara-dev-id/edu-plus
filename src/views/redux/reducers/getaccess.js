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
            return action.api.data.data;
        default:
            return state;
    }
}

export function getAccessLastPage(state = [], action) {
    switch (action.type) {
        case 'GETACCESS_FETCH_DATA_SUCCESS':
            // console.log(action.api.data);
            return action.api.data.last_page;
        default:
            return state;
    }
}

export function getAccessCurrentPage(state = [], action) {
    switch (action.type) {
        case 'GETACCESS_FETCH_DATA_SUCCESS':
            // console.log(action.api.data);
            return action.api.data.current_page;
        default:
            return state;
    }
}


export function IsSchoolsFound(state = [], action) {
    switch (action.type) {
        case 'GETACCESS_FETCH_DATA_SUCCESS':
            return action.api.school_count;

        default:
            return state;
    }
}