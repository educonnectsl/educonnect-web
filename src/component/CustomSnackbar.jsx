import React from "react";
import { Snackbar, Alert } from "@mui/material";
import Slide from "@mui/material/Slide";

const CustomSnackbar = ({ open, message, status, onClose, autoHideDuration }) => (
    <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={onClose}
        autoHideDuration={autoHideDuration}
        slots={{ transition: Slide }}
    >
        <Alert
            onClose={onClose}
            severity={status}
            variant="filled"
            sx={{ width: "100%" }}
        >
            {message}
        </Alert>
    </Snackbar>
);

export default CustomSnackbar;