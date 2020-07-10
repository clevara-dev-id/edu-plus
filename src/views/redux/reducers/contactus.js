import SweetAlert from '../../../components/base_components/SweetAllaret/mobile/SweetAlaretMobile';

export function contactUsSendHaveError(state = false, action) {
    switch (action.type) {
        case 'CONTACTUS_SEND_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function contactUsSendAreLoading(state = false, action) {
    switch (action.type) {
        case 'CONTACTUS_SEND_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function contactUsSendData(state = [], action) {
    switch (action.type) {
        case 'CONTACTUS_SEND_DATA_SUCCESS':
            SweetAlert("Success !",action.api.message, "success" );
            return action.api;

        default:
            return state;
    }
}
