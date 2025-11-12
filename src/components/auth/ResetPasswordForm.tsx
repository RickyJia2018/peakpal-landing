'use client';

import React, { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';

import { ResetPasswordRequest } from "@/pb/rpc_reset_password_pb";
import peakPalClient from "@/lib/peakpalClient";

interface ResetPasswordFormProps {
  userId: number;
  shortLivedToken: string;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ userId, shortLivedToken }) => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: "Passwords do not match." });
      setLoading(false);
      return;
    }

    // Basic password validation (should match backend validators.ValidatePassword)
    if (newPassword.length < 6 || !/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
      setMessage({ type: 'error', text: "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one digit." });
      setLoading(false);
      return;
    }

    const client = peakPalClient;
    const request = new ResetPasswordRequest();
    request.setUserId(userId);
    request.setToken(shortLivedToken);
    request.setNewPassword(newPassword);

    try {
      await client.resetPassword(request, {});
      setMessage({ type: 'success', text: "Your password has been reset successfully. You can now sign in." });
      // Optionally redirect to signin page after a short delay
      // setTimeout(() => {
      //   router.push("/signin");
      // }, 3000);
    } catch (error: unknown) {
      console.error("Reset password error:", error);
      setMessage({ type: 'error', text: error instanceof Error ? error.message : "An unexpected error occurred. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  if (message?.type === 'success') {
    return (
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: 'center',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
          width: '100%',
          maxWidth: { xs: '500px', md: '900px' },
        }}
      >
        <CheckCircleOutline sx={{ fontSize: 80, color: 'success.main' }} />
        <Typography variant="h5" sx={{ mt: 3 }}>
          Password Reset Successful
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {message.text}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        minWidth: {md: "500px"},
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      <Typography component="h1" variant="h5">
        Reset Password
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        name="newPassword"
        label="New Password"
        type="password"
        id="newPassword"
        autoComplete="new-password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm New Password"
        type="password"
        id="confirmPassword"
        autoComplete="new-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? "Resetting..." : "Reset Password"}
      </Button>
      {message && (
        <Alert severity={message.type} sx={{ width: '100%', mt: 2 }}>
          {message.text}
        </Alert>
      )}
    </Box>
  );
};

export default ResetPasswordForm;