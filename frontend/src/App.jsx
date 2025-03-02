import * as React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { SignUpPage } from './pages/SignUpPage';
import { Navbar } from './components/Navbar';
import { useEffect } from 'react';
import { useAuthStore } from './store/useAuthStore.js';
import { Loader } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { MouseTracker } from './components/mouseTracker.jsx';

export default function App() {
  const location = useLocation();
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    console.log("Checking Auth...");
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin' />
    </div>
  );

return (
  <div>
    
    <Toaster />
    {location.pathname !== '/signup'&& location.pathname!=='/login' && <Navbar />}
    <Routes>
      <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
      <Route path='/logout' element={<SettingsPage />} />
      <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
    </Routes>
  </div>
);
}
