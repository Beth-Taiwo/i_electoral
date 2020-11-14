import sweetAlert from 'sweetalert';

const alerter = {
    /**
     * uses sweetalert to display an error message
     * @param {String} msg 
     */
    error(msg = "An error has occurred") {
      sweetAlert({
        icon: "error",
        title: "Error",
        text: msg,
        button: "okay, got it!"
      })
    },
    /**
     * uses sweetalert to display a success message
     * @param {String} msg 
     */
    success(msg = "Operation successfull") {
      sweetAlert({
        icon: "success",
        title: "All Good!",
        text: msg,
      })
    },
    /**
     * uses sweetalert to display a warning message
     * @param {String} msg 
     */
    warning(msg) {
      if(!msg) {
        throw new Error("alerter.warning expected a message but found none");
      }

      sweetAlert({
        icon: "warning",
        title: "Uhmm..",
        text: msg,
        button: "okay, got it!"
      })
    },
    /**
     * uses sweetalert to display a confirm dialog
     * @param {String} msg
     * @param {Function} callback takes users response as a param
     * 
     */
    confirm(msg = "Are you sure you want to perform this operation", callback) {
      sweetAlert({
        icon: "warning",
        text: msg,
        buttons: {
          cancel: {
            text: "cancel",
            value: false,
            visible: true,
            closeModal: true,
          },
          confirm: {
            text: "continue",
            value: true,
            visible: true,
            className: "btn-danger",
            closeModal: true
          }
        }
      })
      .then( (response) => callback(response));

      
    }
}

export default alerter;