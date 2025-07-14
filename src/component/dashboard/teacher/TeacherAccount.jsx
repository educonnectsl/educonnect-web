import { Autocomplete, Button, Divider, Grid2, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import useSnackbar from "../../../hooks/useSnackbar";
import { SCHOOL_POSITIONS, USER_TYPES } from '../../../util/Constant';
import CustomSnackbar from '../../CustomSnackbar';
import api from '../../../services/api';

const textFieldStyle = { width: { xs: '80%', md: '60%', lg: '40%' } };

const schools_hardcoded = [
  { label: 'Royal College Colombo', id: 1 },
  { label: 'Ananda College', id: 2 },
  { label: 'Nalanda College Colombo', id: 3 },
  { label: 'Musaeus College', id: 4 },
  { label: 'Visakha Vidyalaya', id: 5 },
  { label: 'St. Peter’s College', id: 6 },
  { label: 'St. Joseph’s College', id: 7 },
  { label: 'Trinity College Kandy', id: 8 },
  { label: 'Richmond College Galle', id: 9 },
  { label: 'Mahinda College Galle', id: 10 },
];

const TeacherAccount = () => {
  const { user } = useAuth();
  const { snackBarState, showSnackbar, hideSnackbar } = useSnackbar();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    currentPassword: "",
    password: "",
    confirmPassword: "",
    userType: USER_TYPES.TEACHER,
    school: 0,
    position: SCHOOL_POSITIONS.OTHER,
  });


  useEffect(() => {
    try {
      // const response = api.get('/school', { params: { userId: user.id } });
      const response = {} // mocked response
      if (response.data) {
        const schoolDetails = response.data;
        setFormData((prev) => ({
          ...prev,
          school: schoolDetails ? schoolDetails.schoolId : 0,
          position: schoolDetails ? schoolDetails.position : SCHOOL_POSITIONS.OTHER,
        }));
      }
    } catch (error) {
      showSnackbar("Failed to load school data", "error");
    }
  }, [user]);


  const schools = useMemo(() => {
    try {
      // const response = api.get('/school');
      const response = { data: { schools: schools_hardcoded } }; // Mocked response
      return response.data.schools
    } catch (error) {
      showSnackbar("Failed to load schools", "error");
    }
    return schools_hardcoded;
  });


  const handleSchoolChange = (event, newValue) => {
    const school = newValue ? newValue.id : 0;
    setFormData((prev) => ({
      ...prev,
      school: school,
    }));
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const updateTeacherAccount = () => {
    const timestamp = Date.now();
    if (validateForm()) {
      console.log(formData);
      showSnackbar("Teacher account updated successfully", "success");
    }
  }


  const validatePassword = (value) => {
    const trimValue = value.trim();
    if (!trimValue) return "";

    if (trimValue.length < 8) return "Password must be at least 8 characters long";
    if (!/\d/.test(trimValue)) return "Password must contain at least one number";
    if (!/[A-Z]/.test(trimValue)) return "Password must contain at least one uppercase letter";
    return "";
  };


  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    const currentPwdError = validatePassword(formData.currentPassword);
    if (currentPwdError) newErrors.currentPassword = currentPwdError;

    const pwdError = validatePassword(formData.password);
    if (pwdError) newErrors.password = pwdError;

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (formData.school === 0) newErrors.school = "Please select a school";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return true;
    } else {
      showSnackbar(Object.values(newErrors).join(", "), "error");
      return false;
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
          <Typography variant='body2'><b>Teacher</b></Typography>
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
          <Typography variant='body2'>School</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <Autocomplete
            size='small'
            sx={textFieldStyle}
            variant='outlined'
            label="Select school"
            options={schools}
            renderInput={(params) => <TextField {...params} />}
            onChange={handleSchoolChange}
            value={formData.school ? schools.find(s => s.id === formData.school) : null}
            name="school"
          // error={!!errors.school}
          // helperText={errors.school}
          />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Position</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
          <Select
            size='small'
            sx={textFieldStyle}
            variant='outlined'
            defaultValue={'teacher'}
            name='position'
            label='Position'
            onChange={handleInputChange}
            value={formData.position}
            error={!!errors.position}
          // helperText={errors.school}
          >
            {Object.entries(SCHOOL_POSITIONS).map(([key, label]) => (
              <MenuItem key={key} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
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
            onClick={updateTeacherAccount}
          >
            Save
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default TeacherAccount;