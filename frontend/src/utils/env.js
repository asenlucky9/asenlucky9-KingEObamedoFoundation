// Safe environment variable accessor
// This helps avoid __DEFINES__ errors in Vite 7

const getEnv = (key, defaultValue = '') => {
  try {
    // Safely access import.meta.env
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env[key] || defaultValue
    }
    return defaultValue
  } catch (error) {
    console.warn(`Error accessing environment variable ${key}:`, error)
    return defaultValue
  }
}

export const env = {
  VITE_FIREBASE_API_KEY: getEnv('VITE_FIREBASE_API_KEY'),
  VITE_FIREBASE_AUTH_DOMAIN: getEnv('VITE_FIREBASE_AUTH_DOMAIN'),
  VITE_FIREBASE_PROJECT_ID: getEnv('VITE_FIREBASE_PROJECT_ID'),
  VITE_FIREBASE_STORAGE_BUCKET: getEnv('VITE_FIREBASE_STORAGE_BUCKET'),
  VITE_FIREBASE_MESSAGING_SENDER_ID: getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  VITE_FIREBASE_APP_ID: getEnv('VITE_FIREBASE_APP_ID'),
  VITE_FIREBASE_MEASUREMENT_ID: getEnv('VITE_FIREBASE_MEASUREMENT_ID'),
  VITE_PAYSTACK_PUBLIC_KEY: getEnv('VITE_PAYSTACK_PUBLIC_KEY'),
  VITE_FLUTTERWAVE_PUBLIC_KEY: getEnv('VITE_FLUTTERWAVE_PUBLIC_KEY'),
  VITE_SITE_URL: getEnv('VITE_SITE_URL'),
}

export default env
