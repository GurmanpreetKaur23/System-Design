import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import ETE from './ETE';
import OsPage from './pages/os';
import PsPage from './pages/ps';
import TPage from './pages/t';
import DbmsPage from './pages/dbms';
import MemoryManagementPage from './pages/mm';
import VirtualMemoryPage from './pages/vm';
import FsPage from './pages/fs';
import CsPage from './pages/cs';
import AmmPage from './pages/amm';
import OssPage from './pages/oss';

function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ete" element={<ETE />} />
      <Route path="/os" element={<OsPage />} />
      <Route path="/ps" element={<PsPage />} />
      <Route path="/t" element={<TPage />} />
      <Route path="/memory-management" element={<MemoryManagementPage />} />
      <Route path="/virtual-memory" element={<VirtualMemoryPage />} />
      <Route path="/fs" element={<FsPage />} />
      <Route path="/cs" element={<CsPage />} />
      <Route path="/amm" element={<AmmPage />} />
      <Route path="/oss" element={<OssPage />} />
      <Route path="/dbms" element={<DbmsPage />} />
    </Routes>
  );
}

export default AppWrapper;
