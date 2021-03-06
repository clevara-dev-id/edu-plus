export function detailHaveError(state = false, action) {
    switch (action.type) {
        case 'DETAIL_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function detailAreLoading(state = false, action) {
    switch (action.type) {
        case 'DETAIL_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function detail(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            return action.api;

        default:
            return state;
    }
}

export function schoolsCost(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            // console.log(action.api.costs)
            return action.api.costs;

        default:
            return state;
    }
}

export function schoolsImage(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            // console.log(action.api.images)
            return action.api.images;

        default:
            return state;
    }
}

export function schoolFacilities(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            return action.api.facilities;

        default:
            return state;
    }
}

export function schoolsStatus(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            return action.api.status;

        default:
            return state;
    }
}

export function schoolsExtracurricular(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            return action.api.extracurricular;

        default:
            return state;
    }
}

export function schoolsRegistration(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            return action.api.registration;

        default:
            return state;
    }
}

export function schoolsAdressProvince(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            return action.api.province;

        default:
            return state;
    }
}

export function schoolsAdressRegency(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            return action.api.regency;

        default:
            return state;
    }
}

export function schoolsAdressDistrict(state = [], action) {
    switch (action.type) {
        case 'DETAIL_FETCH_DATA_SUCCESS':
            return action.api.district;

        default:
            return state;
    }
}

export function getCityDataSchools(state = [], action) {
    switch (action.type) {
        case 'FETCH_DATA_CITY_SUCCESS':
            return action.api.data.data;

        default:
            return state;
    }
}

