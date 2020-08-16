import axios from 'axios';

export function getaccessInputSendHaveError(bool) {
    return {
        type: 'GETACCESS_INPUT_SEND_HAVE_ERROR',
        hasError: bool
    };
}

export function getaccessInputSendAreLoading(bool) {
    return {
        type: 'GETACCESS_INPUT_SEND_ARE_LOADING',
        isLoading: bool
    };
}

export function getaccessInputSendDataSuccess(api) {
    return {
        type: 'GETACCESS_INPUT_SEND_DATA_SUCCESS',
        api
    };
}

export function getaccessInputSendhData (url, data) {
    return (dispatch) => {
        dispatch(getaccessInputSendAreLoading(true));

        setTimeout(() => {
            axios.post(url, data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(getaccessInputSendAreLoading(false));

                    return response;
                })
                .then((response) => {
                    dispatch(getaccessInputSendDataSuccess(response.data))
                })
                .catch(() => dispatch(getaccessInputSendHaveError(true)));
        }, 250);
    };
}

// export function getaccessInputSendhData(url, data) {
//     return (dispatch) => {
//         dispatch(getaccessInputSendAreLoading(true));

//         setTimeout(async() => {
//             const requestOptions = {
//                 method: 'POST',
//                 headers: { 
//                     'Content-Type': 'application/json',
//                     // 'Authorization': `Bearer ${valueToken}`,
//                     'My-Custom-Header': 'foobar'
//                 },
//                 body: data
//             };
//             fetch(url, requestOptions)
//             .then(response => {
//                 // console.log(response);
//                 if (response.status !== 200) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(getaccessInputSendAreLoading(false));
//                 return response.json();
//             })
//             .then(responseJSON => {
//                 console.log(responseJSON);
//                 dispatch(getaccessInputSendDataSuccess(responseJSON))

//             })
//             .catch((error)=>{
//                 dispatch(getaccessInputSendHaveError(true));
//             })
//         }, 500);
//     };
// }