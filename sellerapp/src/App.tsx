import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { HomePage } from './components/HomePage';
import { EditStore } from './components/EditStore';
import { ReportPage } from './components/ReportPage';
import { Menulist } from './components/Menulist';
import { EditMenu } from './components/EditMenu';
import { FrontStore } from './components/FrontStore';
import { BackStore } from './components/BackStore';
import { CreateMenu } from './components/CreateMenu';
import { LoginPage } from './components/LoginPage';
import { AdminOverview } from './components/AdminOverview';
import { AdminManageStore } from './components/AdminManageStore';
import { AdminOption } from './components/AdminOption';
import { CreateStore } from './components/CreateStore';
import { StoreData } from './types';
import "./App.css";

function App() {
  const [storeData, setStoreData] = useState<StoreData | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch store data from the API when the component mounts
    fetch('https://order-api-patiparnpa.vercel.app/stores/65a39b4ae668f5c8329fac98')
      .then((response) => response.json())
      .then((data: StoreData) => {
        console.log('API Response (Store Data):', data);
        setStoreData(data);
      })
      .catch((error) => {
        console.error('Error fetching store data:', error);
      });
  }, []);

  const appBarRoutePatterns = ['/', '/editstore', '/editmenu', '/report', '/menulist', '/createmenu'];

  useEffect(() => {
    const shouldShowAppBar = appBarRoutePatterns.some((pattern) => location.pathname.startsWith(pattern));
    if (shouldShowAppBar) {
      // If the current route requires AppBar, navigate back to the home page if not already there
      if (location.pathname !== '/') {
        navigate('/');
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      {appBarRoutePatterns.includes(location.pathname) && <AppBar storeData={storeData} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editstore" element={<EditStore />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/menulist" element={<Menulist />} />
        <Route path="/editmenu/:_id" element={<EditMenu />} />
        <Route path="/front" element={<FrontStore />} />
        <Route path="/back" element={<BackStore />} />
        <Route path="/createmenu" element={<CreateMenu />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminOverview />} />
        <Route path="/adminstore" element={<AdminManageStore />} />
        <Route path="/adminoption" element={<AdminOption />} />
        <Route path="/createstore" element={<CreateStore />} />
      </Routes>
    </div>
  );
}

export default App;
