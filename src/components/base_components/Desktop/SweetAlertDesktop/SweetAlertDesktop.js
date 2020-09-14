import Swal from 'sweetalert2';

const SweetAlertDesktop = (title, message, icon) => {
    return Swal.fire({
        title: title,
        text: message,
        icon,
    });
}

export default SweetAlertDesktop;

