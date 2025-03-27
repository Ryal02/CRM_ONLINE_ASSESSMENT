import { useState } from "react";
import { useMutation } from "react-query";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { Box, Container, TextField, Button, Typography, Card } from "@mui/material";
import { CircularProgress } from "@mui/material";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    },
    onError: (error) => {
      alert("Login failed! " + error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container maxWidth="xs">
        <Card sx={{ padding: 3 }}>
          <Typography variant="h5" align="center" marginBottom={3}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box marginBottom={2}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Box>
            <Box marginBottom={3}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={mutation.isLoading}
              sx={{ padding: "10px" }}
            >
              {mutation.isLoading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
