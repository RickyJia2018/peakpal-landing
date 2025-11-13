'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { VerifyEmailRequest } from '@/pb/rpc_verify_email_pb';
import peakPalClient from "@/lib/peakpalClient";

const translations = {
  en: {
    emailVerification: 'Email Verification',
    verifyingEmail: 'Verifying your email...',
    invalidLink: 'Verification link is invalid or incomplete. Missing email or secret code.',
    verificationSuccess: 'Your email has been successfully verified!',
    verificationFailed: 'Email verification failed. Please try again or request a new link.',
    unknownError: 'An unknown error occurred.',
  },
  zh: {
    emailVerification: '邮箱验证',
    verifyingEmail: '正在验证您的邮箱...',
    invalidLink: '验证链接无效或不完整。缺少邮箱或密钥。',
    verificationSuccess: '您的邮箱已成功验证！',
    verificationFailed: '邮箱验证失败。请重试或请求新链接。',
    unknownError: '发生未知错误。',
  },
};

type Language = keyof typeof translations;

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-green-500">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-1.092l-4.249 4.25L9.03 12.36a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.879-4.879Z" clipRule="evenodd" />
  </svg>
);

const XCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-red-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Spinner = () => (
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
);

export default function VerifyEmailClient() {
  const searchParams = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'failure' | null>(null);
  const [message, setMessage] = useState('');
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const userLang = navigator.language.split('-')[0];
    if (userLang === 'zh') {
      setLang('zh');
    } else {
      setLang('en');
    }

    const emailID = searchParams.get('email_id');
    const secretCode = searchParams.get('secret_code');

    if (!emailID || !secretCode) {
      setVerificationStatus('failure');
      setMessage(translations[lang].invalidLink);
      return;
    }

    setVerificationStatus('loading');
    const client = peakPalClient;

    const request = new VerifyEmailRequest();
    request.setEmailId(Number(emailID));
    request.setSecretCode(secretCode);

    client.verifyEmail(request, {}, (err, response) => {
      if (err) {
        console.error("Verification error:", err);
        setVerificationStatus('failure');
        setMessage(translations[lang].verificationFailed);
      } else if (response && response.getSuccess()) {
        setVerificationStatus('success');
        setMessage(translations[lang].verificationSuccess);
      } else {
        setVerificationStatus('failure');
        setMessage(translations[lang].verificationFailed);
      }
    });
  }, [lang, searchParams]);

  const t = (key: keyof typeof translations['en']) => translations[lang][key];

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className=" max-w-md p-8 111 space-y-6 bg-white rounded-lg shadow-lg lg:max-w-4xl dark:bg-gray-800 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {t('emailVerification')}
        </h1>
        
        <div className="flex justify-center py-4">
          {verificationStatus === 'loading' && (
            <div className="flex flex-col items-center space-y-4">
              <Spinner />
              <p className="text-lg text-gray-600 dark:text-gray-300">{t('verifyingEmail')}</p>
            </div>
          )}
          {verificationStatus === 'success' && (
            <div className="flex flex-col items-center space-y-4">
              <CheckCircleIcon />
              <p className="text-xl font-semibold text-green-600">{message}</p>
            </div>
          )}
          {verificationStatus === 'failure' && (
            <div className="flex flex-col items-center space-y-4">
              <XCircleIcon />
              <p className="text-xl font-semibold text-red-600">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}