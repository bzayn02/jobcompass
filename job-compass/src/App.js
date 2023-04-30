import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
<<<<<<< HEAD
import CV from './pages/CV';
import Interview from './pages/Interview';
// import Profile from './pages/Profile';
import JobTracker from './pages/JobTracker';
=======
import Tracker from './pages/Tracker/Tracker';
>>>>>>> Dashboard

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
                    {/* <Route path="/profile" element={<Profile />} /> */}
                    <Route path="/cv" element={<CV />} />
                    <Route path="/interveiw" element={<Interview />} />
                    <Route path="/jobtracker" element={<JobTracker />} />
=======
                    <Route path="/tracker" element={<Tracker />} />
>>>>>>> Dashboard
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
