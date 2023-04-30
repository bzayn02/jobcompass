import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Tracker from './pages/Tracker/Tracker';
import CV from './pages/CV';
import TooltipPositionedExample from './pages/Profile1';
import Interview from './pages/Interview';
import ChatGPT from './components/ChatGPT';
// import Profile from './pages/Profile';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/jobtracker" element={<Tracker />} />
                    <Route path="/interview" element={<Interview />} />
                    <Route path="/chatgpt" element={<ChatGPT />} />

                    <Route
                        path="/profile"
                        element={<TooltipPositionedExample />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
