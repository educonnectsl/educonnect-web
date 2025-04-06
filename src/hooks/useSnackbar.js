import { useState } from "react";

const useSnackbar = () => {
    const [snackBarState, setSnackBarState] = useState({
        open: false,
        message: "",
        status: "success",
        autoHideDuration: 4000,
    });

    const showSnackbar = (message, status = "success", autoHideDuration = 4000) => {
        setSnackBarState({ open: true, message, status, autoHideDuration });
    };

    const hideSnackbar = () => {
        setSnackBarState((prev) => ({ ...prev, open: false }));
    };

    return { snackBarState, showSnackbar, hideSnackbar };
};

export default useSnackbar;