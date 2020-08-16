import SweetAlert from '../../../components/base_components/SweetAllaret/mobile/SweetAlaretMobile';

export function getaccessInputSendHaveError(state = false, action) {
    switch (action.type) {
        case 'GETACCESS_INPUT_SEND_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function getaccessInputSendAreLoading(state = false, action) {
    switch (action.type) {
        case 'GETACCESS_INPUT_SEND_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function getaccessInputSendData(state = [], action) {
    switch (action.type) {
        case 'GETACCESS_INPUT_SEND_DATA_SUCCESS':
            console.log(action);
            if(action.api.success===true){
                SweetAlert("Berhasil Dapatkan Akses !","Berhasil dapatkan Akses. Pihak Eduplus melalui email halo@eduplus.com atau no. telp. +62 999 9999 9999 akan segera menghubungi anda untuk melakukan verifikasi lebih lanjut, Terimakasih", "success" );
            }
            else
            {
                SweetAlert("Failed !",action.api.message, "error" );
            }
            return action.api;

        default:
            return state;
    }
}