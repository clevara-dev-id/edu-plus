import React, { Component } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const SweetAlertDesktop = (title, message, icon) => {
    return Swal.fire({
        title: title,
        text: message,
        icon,
    });
}

export default SweetAlertDesktop;

