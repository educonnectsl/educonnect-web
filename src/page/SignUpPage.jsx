import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Container, Divider, FormControlLabel, Grid2, Link, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomSnackbar from "../component/CustomSnackbar";
import Header from "../component/Header";
import { useAuth } from '../context/AuthContext';
import { COLORS, PATHS } from "../util/Constant";
import useSnackbar from "../hooks/useSnackbar";

const SIGNUP_TYPE = { TEACHER: "Teacher", DONOR: "Donor" };

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: SIGNUP_TYPE.TEACHER,
  });
  const [errors, setErrors] = useState({});
  const { snackBarState, showSnackbar, hideSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { signup } = useAuth();

  const validatePassword = (value) => {
    if (value.length < 8) return "Password must be at least 8 characters long";
    if (!/\d/.test(value)) return "Password must contain at least one number";
    if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUserTypeChange = (event, newValue) => {
    setFormData((prev) => ({
      ...prev,
      userType: newValue,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    else {
      const pwdError = validatePassword(formData.password);
      if (pwdError) newErrors.password = pwdError;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.userType) newErrors.userType = "Please select user type";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return true;
    } else {
      showSnackbar(Object.values(newErrors).join(", "), "error");
      return false;
    }
  };

  const handleSignUpOnClick = async () => {
    const timeStamp = Date.now();
    if (validateForm()) {
      try {
        const payload = {
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          password: formData.password,
          location: "",
          contact_no: "",
          user_type: formData.userType,
          user_state: "Incomplete",
          facebook_id: timeStamp.toString(),
          google_id: timeStamp.toString()
        };
        await signup(payload);
        navigate(PATHS.DASHBOARD);
      } catch (error) {
        showSnackbar(error.response?.data || error.message, "error");
      }
    }
  };

  return (
    <>
      <Header position="absolute" />
      <Container maxWidth="md" sx={{ p: 2, minWidth: 720 }}>
        <CustomSnackbar
          open={snackBarState.open}
          message={snackBarState.message}
          status={snackBarState.status}
          onClose={hideSnackbar}
          autoHideDuration={snackBarState.autoHideDuration}
        />

        <Grid2
          container
          spacing={1}
          sx={{ m: 4, p: 2, backgroundColor: COLORS.LIGHT_GRAY }}
        >
          <Grid2 size={{ xs: 0, md: 4, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: 2,
                backgroundImage: "url(signup.jpg)",
                backgroundSize: "cover",
              }}
            />
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 8 }}
            sx={{ backgroundColor: "white", borderRadius: 2 }}
          >
            <Box sx={{ height: "100%" }}>
              <Grid2 container spacing={0} direction="row" sx={{ p: 2 }}>
                <Grid2 size={12} sx={{ mt: 2, mb: 6, mx: 6 }}>
                  <Box>
                    <Typography variant="h4" align="center">
                      Create an account
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" align="center">
                      Please enter your details
                    </Typography>
                  </Box>
                </Grid2>

                <Grid2
                  size={12}
                  sx={{ mt: 0, mb: 4, mx: 6, display: "flex", justifyContent: "center" }}
                >
                  <RadioGroup
                    row
                    defaultValue={SIGNUP_TYPE.TEACHER}
                    value={formData.userType}
                    onChange={handleUserTypeChange}
                  >
                    <FormControlLabel
                      value={SIGNUP_TYPE.TEACHER}
                      control={<Radio />}
                      label={SIGNUP_TYPE.TEACHER}
                    />
                    <FormControlLabel
                      value={SIGNUP_TYPE.DONOR}
                      control={<Radio />}
                      label={SIGNUP_TYPE.DONOR}
                    />
                  </RadioGroup>
                </Grid2>

                <Grid2
                  size={6}
                  sx={{ mt: 0, mb: 2, pl: 6, pr: 1, display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    name="firstName"
                    label="First name"
                    variant="outlined"
                    required
                    size="small"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    sx={{ width: "100%" }}
                  />
                </Grid2>
                <Grid2
                  size={6}
                  sx={{ mt: 0, mb: 2, pl: 1, pr: 6, display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    name="lastName"
                    label="Last name"
                    variant="outlined"
                    size="small"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    sx={{ width: "100%" }}
                  />
                </Grid2>

                <Grid2
                  size={12}
                  sx={{ mt: 0, mb: 2, mx: 6, display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    required
                    type="email"
                    size="small"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{ width: "100%" }}
                  />
                </Grid2>

                <Grid2
                  size={12}
                  sx={{ mt: 0, mb: 2, mx: 6, display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    required
                    type="password"
                    size="small"
                    value={formData.password}
                    onChange={(e) => {
                      handleInputChange(e);
                      const pwdMsg = validatePassword(e.target.value);
                      setErrors((prev) => ({ ...prev, password: pwdMsg }));
                    }}
                    error={!!errors.password}
                    helperText={errors.password}
                    sx={{ width: "100%" }}
                  />
                </Grid2>

                <Grid2
                  size={12}
                  sx={{ mt: 0, mb: 4, mx: 6, display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    name="confirmPassword"
                    label="Confirm password"
                    variant="outlined"
                    required
                    type="password"
                    size="small"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    sx={{ width: "100%" }}
                  />
                </Grid2>

                <Grid2
                  size={12}
                  sx={{ mt: 0, mb: 0, mx: 6, display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ width: "100%" }}
                    onClick={handleSignUpOnClick}
                  >
                    Create an account
                  </Button>
                </Grid2>
                <Grid2
                  size={12}
                  sx={{ mt: 0, mb: 0, mx: 6, display: "flex", justifyContent: "center" }}
                >
                  <Divider>or</Divider>
                </Grid2>
                <Grid2
                  size={12}
                  sx={{ mt: 0, mb: 4, mx: 6, display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%", textTransform: "none" }}
                    onClick={handleSignUpOnClick}
                  >
                    <GoogleIcon sx={{ width: 15, height: 15, mx: 1 }} />
                    Signup with Google
                  </Button>
                </Grid2>

                <Grid2 size={12} sx={{ mt: 0, mb: 2, mx: 6, height: "auto" }}>
                  <Typography variant="body1" align="center">
                    Already have an account?&nbsp;
                    <Link href="/login" variant="inherit" underline="hover">
                      Login
                    </Link>
                  </Typography>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default SignUpPage;
