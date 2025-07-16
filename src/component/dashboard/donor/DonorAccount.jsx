import { Button, Divider, Grid2, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import useSnackbar from "../../../hooks/useSnackbar";
import CustomSnackbar from '../../CustomSnackbar';

const textFieldStyle = { width: { xs: '80%', md: '60%', lg: '40%' } };

const DonorAccount = () => {
  const { user } = useAuth();
  console.log(user);
  const { snackBarState, showSnackbar, hideSnackbar } = useSnackbar();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    currentPassword: "",
    password: "",
    confirmPassword: "",
    userType: user.user_type,
    location: "",
    contact: "",
  });


  const fetchDonorDetails = async () => {
    try {
      // const response = await api.get(`/user/${user.user_id}/donor`)
      const response = {} // mocked response
      if (response.data) {
        const donorDetails = response.data;
        setFormData((prev) => ({
          ...prev,
          location: donorDetails ? donorDetails.location : "",
          contact: donorDetails ? donorDetails.contact : "",
        }));
      }
    } catch (error) {
      showSnackbar("Failed to load user details", "error");
    }
  };


  useEffect(() => {
    fetchDonorDetails();
  }, [user]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const validatePassword = (value) => {
    const trimValue = value.trim();
    if (!trimValue) return "";

    if (trimValue.length < 8) return "Password must be at least 8 characters long";
    if (!/\d/.test(trimValue)) return "Password must contain at least one number";
    if (!/[A-Z]/.test(trimValue)) return "Password must contain at least one uppercase letter";
    return "";
  };


  const validatePhoneNumber = (value) => {
    const phone = value.trim();
    if (!phone) return "";

    const phoneRegex = /^(?:\+94|0)?[1-9]\d{8}$/;
    if (!phoneRegex.test(phone)) return "Invalid phone number format";
    return "";
  };


  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    const phoneError = validatePhoneNumber(formData.contact);
    if (phoneError) newErrors.contact = phoneError;

    const currentPwdError = validatePassword(formData.currentPassword);
    if (currentPwdError) newErrors.currentPassword = currentPwdError;

    const pwdError = validatePassword(formData.password);
    if (pwdError) newErrors.password = pwdError;

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return true;
    } else {
      showSnackbar(Object.values(newErrors).join(", "), "error");
      return false;
    }
  };


  const updateDonorAccount = async () => {
    const timestamp = Date.now();
    if (validateForm()) {
      console.log(formData);
      try {
        // await api.put(`/user/${user.user_id}/donor`, formData);
        showSnackbar("Donor account updated successfully", "success");
      } catch (error) {
        console.error("Error updating donor data:", error);
        showSnackbar("Error updating donor data", "error");
      }
    }
  };


  return (
    <>
      <CustomSnackbar
        open={snackBarState.open}
        message={snackBarState.message}
        status={snackBarState.status}
        onClose={hideSnackbar}
        autoHideDuration={snackBarState.autoHideDuration}
      />

      <Grid2 container spacing={2} maxWidth="lg">
        <Grid2 size={{ xs: 12 }} sx={{ px: 2, py: 1 }}>
          <Typography variant='h6'>Account</Typography>
          <Divider />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Account type</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <Typography variant='body2'><b>{user.user_type}</b></Typography>
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Email</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <Typography variant='body2'><b>{user.email}</b></Typography>
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>First name</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <TextField
            sx={textFieldStyle}
            variant='outlined'
            size='small'
            name='firstName'
            label='First name'
            required
            value={formData.firstName}
            onChange={handleInputChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Last name</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <TextField
            sx={textFieldStyle}
            variant='outlined'
            size='small'
            name='lastName'
            label='Last name'
            required
            value={formData.lastName}
            onChange={handleInputChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Location</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <TextField
            sx={textFieldStyle}
            variant='outlined'
            size='small'
            name='location'
            label='Country/Province/City'
            required
            value={formData.location}
            onChange={handleInputChange}
            error={!!errors.location}
            helperText={errors.location}
          />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Contact</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <TextField
            sx={textFieldStyle}
            variant='outlined'
            size='small'
            name='contact'
            label='Mobile or telephone number'
            required
            value={formData.contact}
            onChange={(e) => {
              handleInputChange(e);
              const phoneError = validatePhoneNumber(e.target.value);
              setErrors((prev) => ({ ...prev, contact: phoneError }));
            }}
            error={!!errors.contact}
            helperText={errors.contact}
          />
        </Grid2>

        <Grid2 size={{ md: 12 }} sx={{ mt: 2, ml: 2, mb: 1 }}>
          <Typography variant='body2'>Change password</Typography>
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Current password</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <TextField
            sx={textFieldStyle}
            variant='outlined'
            size='small'
            type='password'
            name="currentPassword"
            label="Current password"
            value={formData.currentPassword}
            onChange={(e) => {
              handleInputChange(e);
              const pwdMsg = validatePassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: pwdMsg }));
            }}
            error={!!errors.currentPassword}
            helperText={errors.currentPassword}
          />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Password</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <TextField
            sx={textFieldStyle}
            variant='outlined'
            size='small'
            type='password'
            name="password"
            label="Password"
            value={formData.password}
            onChange={(e) => {
              handleInputChange(e);
              const pwdMsg = validatePassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: pwdMsg }));
            }}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Confirm password</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 2 }}>
          <TextField
            sx={textFieldStyle}
            variant='outlined'
            size='small'
            type='password'
            name="confirmPassword"
            label="Confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        </Grid2>

        <Grid2 size={{ xs: 12 }} sx={{ ml: 2 }}>
          <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={updateDonorAccount}
          >
            Save
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default DonorAccount;