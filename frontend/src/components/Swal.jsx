import Swal from 'sweetalert2';

export const showSuccessAlert = (message, title = "Success") => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: message,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

export const showErrorAlert = (message, title = "Error") => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: message,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};
