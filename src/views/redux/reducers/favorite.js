export function favoriteHaveError(state = false, action) {
    switch (action.type) {
        case 'FAVORITE_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function favoriteAreLoading(state = false, action) {
    switch (action.type) {
        case 'FAVORITE_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function favorite(state = [], action) {
    switch (action.type) {
        case 'FAVORITE_FETCH_DATA_SUCCESS':
            return action.api.school;

        default:
            return state;
    }
}

export function favoriteSMP(state = [], action) {
    switch (action.type) {
        case 'FAVORITE_FETCH_DATA_SUCCESS_SMP':
            return action.api.school;

        default:
            return state;
    }
}

export function favoriteSMA(state = [], action) {
    switch (action.type) {
        case 'FAVORITE_FETCH_DATA_SUCCESS_SMA':
            return action.api.school;

        default:
            return state;
    }
}

// export function currentfavorite(state = [], action) {
//     switch (action.type) {
//         case 'FAVORITE_FETCH_DATA_SUCCESS':
//             return action.api.school.current_page;

//         default:
//             return state;
//     }
// }

// export function currentfavoriteSMP(state = [], action) {
//     switch (action.type) {
//         case 'FAVORITE_FETCH_DATA_SUCCESS_SMP':
//             return action.api.school.current_page;

//         default:
//             return state;
//     }
// }

// export function currentfavoriteSMA(state = [], action) {
//     switch (action.type) {
//         case 'FAVORITE_FETCH_DATA_SUCCESS_SMA':
//             return action.api.school.current_page;

//         default:
//             return state;
//     }
// }

export function getProvinceName(state = [], action) {
    switch (action.type) {
        case 'FAVORITE_FETCH_DATA_SUCCESS':
            return action.api.province_name.name;

        default:
            return state;
    }
}
