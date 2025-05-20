import { useState } from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import { useLogin } from './hooks';
import { EmailField, PasswordField, SubmitButton, Error } from './form';

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const loginMutation = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate({ email, password });
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
                <Card sx={{ padding: 3}}>
                    <Typography variant='h5' align='center' marginBottom={3}>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box marginBottom={2}>
                            <EmailField value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Box>
                        <Box marginBottom={2}>
                            <PasswordField value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Box>
                            <Error message={loginMutation.error?.response?.data?.message} />
                            <SubmitButton loading={loginMutation.isLoading} />
                    </form>
                </Card>
            </Container>
        </Box>
    )
}