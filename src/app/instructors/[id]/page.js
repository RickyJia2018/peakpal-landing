"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const InstructorRedirectPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the instructor ID from the URL

  useEffect(() => {
    if (!id) return; // Wait until ID is available

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Attempt to open the app via Universal Link (if app is installed)
      // If app is not installed, it will fall back to the App Store.
      // Note: Universal Links are handled by iOS itself, so a direct redirect to the app store
      // is often the fallback if the app isn't installed.
      // Forcing App Store: window.location.replace("https://apps.apple.com/us/app/snowpro/idXXXXXXXXX");
      // Forcing Universal Link attempt: window.location.replace(`snowproapp://instructors/${id}`);
      // For this specific requirement (force app store if app not installed),
      // we'll redirect to the App Store directly.
      window.location.replace("https://apps.apple.com/us/app/snowpro/idXXXXXXXXX"); // TODO: Replace with actual App Store URL
    }
    // Check if Android
    else if (/android/i.test(userAgent)) {
      // Attempt to open the app via App Link (if app is installed)
      // If app is not installed, it will fall back to the Play Store.
      // Forcing Play Store: window.location.replace("https://play.google.com/store/apps/details?id=com.googuar.snowpro");
      // Forcing App Link attempt: window.location.replace(`android-app://com.googuar.snowpro/http/snowpro.app/instructors/${id}`);
      // For this specific requirement (force app store if app not installed),
      // we'll redirect to the Play Store directly.
      window.location.replace("https://play.google.com/store/apps/details?id=com.googuar.snowpro"); // TODO: Replace with actual Play Store URL
    }
    // Fallback for desktop or other devices
    else {
      // For desktop, we can show a simple page with links/QR codes to download the app
      // or redirect to a general landing page.
      // For now, we'll just show a message.
      console.log("Redirecting to app store not applicable for this device.");
      // Optionally, redirect to a general landing page:
      // window.location.replace("https://snowpro.app/download");
    }
  }, [id, router]);

  return (
    <>
      <Head>
        <title>SnowPro - Instructor Profile</title>
        <meta name="description" content="Redirecting to SnowPro app..." />
      </Head>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        backgroundColor: '#f0f2f5',
        color: '#333'
      }}>
        <h1>Redirecting to SnowPro App...</h1>
        <p>If you are not redirected automatically, please click the links below:</p>
        <p>
          <a href="https://apps.apple.com/us/app/snowpro/idXXXXXXXXX" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
            Download on the App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.googuar.snowpro" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
            Get it on Google Play
          </a>
        </p>
        <p>Instructor ID: {id}</p>
      </div>
    </>
  );
};

export default InstructorRedirectPage;