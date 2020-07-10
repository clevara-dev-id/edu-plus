import axios from 'axios';

export function detailHaveError(bool) {
    return {
        type: 'DETAIL_HAVE_ERROR',
        hasError: bool
    };
}

export function detailAreLoading(bool) {
    return {
        type: 'DETAIL_ARE_LOADING',
        isLoading: bool
    };
}

export function detailFetchDataSuccess(api) {
    return {
        type: 'DETAIL_FETCH_DATA_SUCCESS',
        api
    };
}

export function fetchDataCitySuccess(api) {
    return {
        type: 'FETCH_DATA_CITY_SUCCESS',
        api
    };
}

export function detailFetchData (url, data) {
    return (dispatch) => {
        dispatch(detailAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(detailAreLoading(false));

                    return response;
                })
                .then(async(response) => {
                    let newArrayDetailSekolah={};
                    const dataProv = await axios.get(`http://localhost:8000/api/province/${response.data.province_id}/sd`);
                    const dataCity = await axios.get(`http://localhost:8000/api/regency/${response.data.regency_id}/sd`);
                    const dataDistrict = await axios.get(`http://localhost:8000/api/district/${response.data.district_id}/sd`);
                    const newDataProv = await dataProv.data.province_name.name;
                    const newDataCity = await dataCity.data.regency_name.name;
                    const newDataDistrict = await dataDistrict.data.district_name.name;
                    newArrayDetailSekolah={
                            accreditation: response.data.accreditation,
                            address: response.data.address,
                            costs: response.data.costs,
                            created_at: response.data.created_at,
                            curriculum: response.data.curriculum,
                            district_id: newDataDistrict,
                            district_id_number: response.data.district_id,
                            educational_stage: response.data.educational_stage,
                            email: response.data.email,
                            extracurricular: response.data.extracurricular,
                            facilities: response.data.facilities,
                            headmaster: response.data.headmaster,
                            id: response.data.id,
                            images: response.data.images,
                            majors: response.data.majors,
                            name: response.data.name,
                            npsn: response.data.npsn,
                            phone_number: response.data.phone_number,
                            postal_code: response.data.postal_code,
                            province_id: newDataProv,
                            publish: response.data.publish,
                            regency_id: newDataCity,
                            schools_hour: response.data.schools_hour,
                            status: response.data.status,
                            total_student: response.data.total_student,
                            updated_at: response.data.updated_at,
                            user: response.data.user,
                            uuid: response.data.uuid,
                            village_id: response.data.village_id,
                            website: response.data.website,
                    }
                    // console.log(newArrayDetailSekolah);
                    dispatch(detailFetchDataSuccess(newArrayDetailSekolah))
                })
                .catch(() => dispatch(detailHaveError(true)));
        }, 500);
    };
}

export function fetchDataCity (url, data) {
    return (dispatch) => {
        dispatch(detailAreLoading(true));

        setTimeout(() => {
            axios.post(url, data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(detailAreLoading(false));

                    return response;
                })
                .then(async(response) => {
                    dispatch(fetchDataCitySuccess(response.data))
                })
                .catch(() => dispatch(detailHaveError(true)));
        
               
        }, 500);
    };
}