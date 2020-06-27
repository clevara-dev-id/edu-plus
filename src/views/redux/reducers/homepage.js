export function homepageHaveError(state = false, action) {
    switch (action.type) {
        case 'HOMEPAGE_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function homepageAreLoading(state = false, action) {
    switch (action.type) {
        case 'HOMEPAGE_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function homepage(state = [], action) {
    switch (action.type) {
        case 'HOMEPAGE_FETCH_DATA_SUCCESS':
            console.log(action.api.school);
            return action.api.school

        default:
            return state;
    }
}

export function homepageSMP(state = [], action) {
    switch (action.type) {
        case 'HOMEPAGE_FETCH_DATA_SUCCESS_SMP':
            return action.api.school;

        default:
            return state;
    }
}

export function homepageSMA(state = [], action) {
    switch (action.type) {
        case 'HOMEPAGE_FETCH_DATA_SUCCESS_SMA':
            return action.api.school;

        default:
            return state;
    }
}

// export function currentHomepage(state = [], action) {
//     switch (action.type) {
//         case 'HOMEPAGE_FETCH_DATA_SUCCESS':
//             return action.api.school.current_page;

//         default:
//             return state;
//     }
// }

// export function currentHomepageSMP(state = [], action) {
//     switch (action.type) {
//         case 'HOMEPAGE_FETCH_DATA_SUCCESS_SMP':
//             // console.log(action.api);
//             return action.api.school.current_page;
//         default:
//             return state;
//     }
// }

// export function currentHomepageSMA(state = [], action) {
//     switch (action.type) {
//         case 'HOMEPAGE_FETCH_DATA_SUCCESS_SMA':
//             return action.api.school.current_page;

//         default:
//             return state;
//     }
// }

export function promo(state = [], action) {
    switch (action.type) {
        case 'PROMO_FETCH_DATA_SUCCESS':
            return action.api.promo.data;

        default:
            return state;
    }
}

