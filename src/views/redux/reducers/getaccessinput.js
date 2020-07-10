export function getaccessInputHaveError(state = false, action) {
    switch (action.type) {
        case 'GETACCESS_INPUT_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function getaccessInputAreLoading(state = false, action) {
    switch (action.type) {
        case 'GETACCESS_INPUT_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function getaccessInput(state = [], action) {
    switch (action.type) {
        case 'GETACCESS_INPUT_FETCH_DATA_SUCCESS':
            // console.log(action);
            return action.api;

        default:
            return state;
    }
}

// export function getaccessInputSendData(state = [], action) {
//     switch (action.type) {
//         case 'GETACCESS_INPUT_SEND_DATA_SUCCESS':
//             console.log(action);
//             return action.api;

//         default:
//             return state;
//     }
// }

