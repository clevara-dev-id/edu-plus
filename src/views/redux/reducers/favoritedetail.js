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
            return action.api.data;

        default:
            return state;
    }
}

export function favoriteDetailSMP(state = [], action) {
    switch (action.type) {
        case 'FAVORITEDETAIL_FETCH_DATA_SUCCESS_SMP':
            return action.api.data;

        default:
            return state;
    }
}

export function favoriteDetailSMA(state = [], action) {
    switch (action.type) {
        case 'FAVORITEDETAIL_FETCH_DATA_SUCCESS_SMA':
            return action.api.data;

        default:
            return state;
    }
}

// export function currentfavoriteDetail(state = [], action) {
//     switch (action.type) {
//         case 'FAVORITEDETAIL_FETCH_DATA_SUCCESS':
//             return action.api.data.current_page;

//         default:
//             return state;
//     }
// }

// export function currentfavoriteDetailSMP(state = [], action) {
//     switch (action.type) {
//         case 'FAVORITEDETAIL_FETCH_DATA_SUCCESS_SMP':
//             return action.api.data.current_page;

//         default:
//             return state;
//     }
// }

// export function currentfavoriteDetailSMA(state = [], action) {
//     switch (action.type) {
//         case 'FAVORITEDETAIL_FETCH_DATA_SUCCESS_SMA':
//             return action.api.data.current_page;

//         default:
//             return state;
//     }
// }

export function getCityName(state = [], action) {
    switch (action.type) {
        case 'FAVORITEDETAIL_FETCH_CITYNAME_SUCCESS':
            return action.api.regency_name.name;

        default:
            return state;
    }
}

export function getProvName(state = [], action) {
    switch (action.type) {
        case 'FAVORITEDETAIL_FETCH_PROVNAME_SUCCESS':
            return action.api.province_name.name;

        default:
            return state;
    }
}
