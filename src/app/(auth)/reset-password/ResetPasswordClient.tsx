'use client';

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Typography, Box, CircularProgress, Alert } from "@mui/material";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { VerifyForgotPasswordTokenRequest } from "@/pb/rpc_reset_password_pb";
import peakPalClient from "@/lib/peakpalClient";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [shortLivedToken, setShortLivedToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");
    const userIdParam = searchParams.get("user_id");

    if (!token || !userIdParam) {
      setVerificationStatus('error');
      setErrorMessage("Missing token or user ID in the URL.");
      return;
    }

    const parsedUserId = parseInt(userIdParam, 10);
    if (isNaN(parsedUserId)) {
      setVerificationStatus('error');
      setErrorMessage("Invalid user ID in the URL.");
      return;
    }

    setUserId(parsedUserId);

    const verifyToken = async () => {
      const client = peakPalClient;
      const request = new VerifyForgotPasswordTokenRequest();
      request.setToken(token);
      request.setUserId(parsedUserId);

      try {
        const response = await client.verifyForgotPasswordToken(request, {});
        if (response.getSuccess()) {
          setShortLivedToken(response.getShortLivedToken());
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
          setErrorMessage(response.getMessage() || "Token verification failed.");
        }
      } catch (error: unknown) {
        console.error("Token verification API error:", error);
        setVerificationStatus('error');
        setErrorMessage(error instanceof Error ? error.message : "Failed to verify token. The link may be invalid or expired.");
      }
    };

    verifyToken();
  }, [searchParams]);

  if (verificationStatus === 'loading') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>Verifying token...</Typography>
      </Box>
    );
  }

  if (verificationStatus === 'error') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Alert severity="error">{errorMessage || "An unexpected error occurred."}</Alert>

      </Box>
    );
  }

  if (verificationStatus === 'success' && shortLivedToken && userId !== null) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 128px)', // Center vertically
        }}
      >
        <ResetPasswordForm userId={userId} shortLivedToken={shortLivedToken} />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
      <Alert severity="error">An unexpected state occurred during token verification.</Alert>
    </Box>
  );
}