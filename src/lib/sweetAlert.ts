/** SweetAlertHandling **/
import Swal from "sweetalert2";
import { Messages } from "./config";
import "../css/alerts.css";

/** Shared look for every alert: stops the page from jumping when a popup opens */
const BurakSwal = Swal.mixin({
  heightAuto: false,
  scrollbarPadding: false,
});

export const sweetErrorHandling = async (err: any) => {
  const error = err.response?.data ?? err;
  const message = error?.message ?? Messages.error1;
  await BurakSwal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    showConfirmButton: false,
    showCloseButton: true,
  });
};

export const sweetTopSuccessAlert = async (
  msg: string,
  duration: number = 2000,
) => {
  await BurakSwal.fire({
    position: "top-end",
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: duration,
    timerProgressBar: true,
  });
};

export const sweetTopSmallSuccessAlert = async (
  msg: string,
  duration: number = 2000,
) => {
  const Toast = BurakSwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: duration,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "success",
    title: msg,
  }).then();
};

export const sweetFailureProvider = (
  msg: string,
  show_button: boolean = false,
  forward_url: string = "",
) => {
  BurakSwal.fire({
    icon: "error",
    title: msg,
    showConfirmButton: show_button,
    confirmButtonText: "OK",
  }).then(() => {
    if (forward_url !== "") {
      window.location.replace(forward_url);
    }
  });
};
