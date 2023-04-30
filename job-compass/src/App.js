import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CV from './pages/CV';
import Interview from './pages/Interview';
import Profile from './pages/Profile';
import JobTracker from './pages/JobTracker';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/interveiw" element={<Interview />} />
                    <Route path="/jobtracker" element={<JobTracker />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
